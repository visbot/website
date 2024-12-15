import archive from '$data/archive.jsonc';
import prettyBytes from 'pretty-bytes';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	const pathname = url.pathname
		.split('/')
		.filter((segment) => Boolean(segment) && segment !== 'archive')
		.join('/');

	const files = archive.filter((item) => item.relativePath === pathname).sort((a, z) => a.name.localeCompare(z.name));

	console.log(
		{ pathname },
		files.map((pack) => pack.relativePath)
	);

	return {
		pathname,
		folders:
			pathname === ''
				? archive.map((pack) => pack.relativePath).filter((value, index, self) => self.indexOf(value) === index)
				: [],
		packs: files.map((pack) => {
			return {
				name: pack.name.toLowerCase(),
				url: `https://files.visbot.net/archive/${pack.relativePath}/${pack.name}`,
				size: prettyBytes(pack.size)
			};
		})
	};
}
