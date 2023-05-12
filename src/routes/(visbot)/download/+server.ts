import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const options: ResponseInit = {
		status: 302,
		headers: {
			location: '/.netlify/functions/download'
		}
	};

	return new Response(null, options);
};
