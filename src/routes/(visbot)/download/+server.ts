import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';

export const GET: RequestHandler = async (event) => {
	const file = getFile(event.url.href);
	const body = await fs.readFile(resolve(process.cwd(), 'static/files/packs', file));

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'application/zip',
			'Content-Disposition': `filename="${file}`
		}
	});
};

function getFile(rawUrl: string): string {
	const url = new URL(rawUrl);
	const searchParams = new URLSearchParams(url.search);
	const file = searchParams.get('file') || '';

	return file;
}
