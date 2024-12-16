import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.hostname === 'archive.visbot.net') {
		return new Response(null, {
			status: 302,
			headers: { location: 'https://visbot.net/archive' }
		});
	}

	if (event.url.pathname === '/.well-known/atproto-did') {
		return new Response(process.env.ATPROTO_DID, {
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}

	return await resolve(event);
};
