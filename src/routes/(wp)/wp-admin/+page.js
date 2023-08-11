export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	const searchParams = new URLSearchParams(url.search);
	const isLogin = searchParams.has('action') && searchParams.get('action') === 'lostpassword' ? false : true;

	return {
		isLogin
	};
}
