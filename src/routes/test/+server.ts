import { type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
		method: 'POST',
		body: JSON.stringify({
			client_id: 0,
			events: [
				{
					name: 'svelte_server'
				}
			]
		})
	});

	const options: ResponseInit = {
		status: 200
	};

	return new Response('All good', options);
};
