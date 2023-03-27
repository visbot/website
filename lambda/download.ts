import { v4 as uuid } from '@lukeed/uuid';
import type { APIGatewayEvent } from 'aws-lambda';

exports.handler = async function (event: APIGatewayEvent) {
	// if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
	// 	await trackDownload(event);
	// }

	const { catalogue, type } = getParams(event.rawUrl);
	const extension = type === 'executable' ? 'exe.zip' : 'zip';

	return {
		statusCode: 200,
		body: JSON.stringify({
			catalogue,
			type,
			extension,
			rawUrl: event.rawUrl
		})
	};

	return {
		statusCode: 302,
		headers: {
			Location: `https://visbot.net/downloads/packs/${catalogue}.${extension}?`
		}
	};
};

async function trackDownload(event) {
	const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
	const GA_API_SECRET = process.env.GA_API_SECRET;
	const { catalogue, type } = getParams(event.rawUrl);

	if (!catalogue?.length || !type?.length) {
		return;
	}

	await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
		method: 'POST',
		body: JSON.stringify({
			client_id: uuid(),
			events: [
				{
					name: 'download',
					params: {
						catalogue,
						type
					}
				}
			],
			geoid: event.headers['x-country']
		})
	});
}

function getParams(rawUrl) {
	const url = new URL(rawUrl);
	const searchParams = new URLSearchParams(url.search);
	const catalogue = searchParams.get('catalogue');
	const type = searchParams.get('type');

	return {
		catalogue,
		type
	};
}
