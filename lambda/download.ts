import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import appInsights from 'applicationinsights';
import type { APIGatewayEvent } from 'aws-lambda';

appInsights.setup().start();

export async function handler(event: APIGatewayEvent) {
	if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
		await trackDownload(event);
	}

	const file = getFile(event.rawUrl);

	return {
		statusCode: 302,
		headers: {
			Location: `https://visbot.net/files/packs/${file}?`
		}
	};
}

async function trackDownload(event) {
	const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
	const GA_API_SECRET = process.env.GA_API_SECRET;
	const file = getFile(event.rawUrl);

	if (!file?.length) {
		console.error('Missing file');
		return;
	}

	const { catalogue, type } = getParams(file);

	if (!catalogue?.length || !type?.length) {
		console.error('Missing type or catalogue');
		return;
	}

	const namespace = uuidv5('https://visbot.net', uuidv5.URL);
	const clientId = event.requestContext?.http?.sourceIp ? uuidv5(event.requestContext.http.sourceIp, namespace) : uuidv4();

	await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
		method: 'POST',
		body: JSON.stringify({
			client_id: clientId,
			events: [
				{
					name: 'download',
					params: {
						file,
						catalogue,
						type
					}
				}
			]
		})
	});

	const client = appInsights.defaultClient;

	client.trackEvent({
		name: 'download',
		properties: {
			file,
			catalogue,
			type
		}
	});
}

function getFile(rawUrl: string): string {
	const url = new URL(rawUrl);
	const searchParams = new URLSearchParams(url.search);
	const file = searchParams.get('file') || '';

	return file;
}

function getParams(file: string): { catalogue: string; type: string } {
	const catalogue = file.split('.')[0];

	switch (true) {
		case file.endsWith('.exe.zip'):
			return {
				catalogue,
				type: 'executable'
			};

		case file.endsWith('.zip'):
			return {
				catalogue,
				type: 'archive'
			};

		default:
			throw new Error('Could not determine file properties');
	}
}
