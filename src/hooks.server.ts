import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.hostname === 'archive.visbot.net') {
		return new Response(null, {
			status: 302,
			headers: { location: 'https://visbot.net/archive' }
		});
	}

	return await resolve(event);
};
