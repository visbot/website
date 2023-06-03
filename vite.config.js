import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$: resolve('./src'),
			$components: resolve('./src/components'),
			$meta: resolve('./src/meta'),
			$stores: resolve('./src/stores')
		}
	}
};

export default config;
