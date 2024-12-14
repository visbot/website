export async function GET() {
	if (!process.env.ATPROTO_DID) {
		return new Response('405 Method Not Allowed', {
			status: 405,
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}

	return new Response(process.env.ATPROTO_DID, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
