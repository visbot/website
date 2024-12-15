import { redirect } from '@sveltejs/kit';
import fetch from 'cross-fetch';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	if (url.hostname === 'archive.visbot.net') {
		redirect(302, 'https://visbot.net/archive');
	}

	const file = getFile(url.href);

	redirect(302, `https://files.visbot.net/packs/${file}`);
}

async function trackDownload(url) {
	if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
		console.warn('GA_MEASUREMENT_ID or GA_API_SECRET is not defined');
		return;
	}

	const file = getFile(url.href);

	if (!file?.length) {
		console.error('Missing file');
		return;
	}

	const { catalogue, type } = getParams(file);

	if (!catalogue?.length || !type?.length) {
		console.error('Missing type or catalogue');
		return;
	}

	const clientId = self.crypto.randomUUID();

	const eventProperties = {
		name: 'download',
		params: {
			file,
			catalogue,
			type
		}
	};

	const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
	const GA_API_SECRET = process.env.GA_API_SECRET;

	await fetch(
		`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
		{
			method: 'POST',
			body: JSON.stringify({
				client_id: clientId,
				events: [eventProperties]
			})
		}
	);
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
