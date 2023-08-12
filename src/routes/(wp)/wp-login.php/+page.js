export const prerender = true;

export function load({ url }) {
	const searchParams = new URLSearchParams(url.search);
	const formType = searchParams.has('action') && searchParams.get('action') === 'lostpassword' ? 'lostpassword' : 'login';

	return {
		formType
	};
}
