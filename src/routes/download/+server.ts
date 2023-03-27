import { json, type RequestHandler } from '@sveltejs/kit';

// /api/newsletter GET

export const GET: RequestHandler = async () => {
	const options: ResponseInit = {
		status: 302,
		headers: {
			location: '/.netlify/functions/download'
		}
	};

	return new Response('Hello', options);
};
