import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import * as v from 'valibot';
import json5Plugin from 'vite-plugin-json5';
import mkcert from 'vite-plugin-mkcert';
import valibot from 'vite-plugin-valibot-env';

const schema = v.object({
	VITE_SITE_NAME: v.string(),
	VITE_WORDPRESS_VERSION: v.literal('6.0.0'),
	VITE_CONNECTION_TIMEOUT: v.pipe(v.number(), v.integer()),
	VITE_HIDE_ROBOTS: v.boolean()
});

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
	loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			json5Plugin({
				stringify: true
			}),
			mkcert(),
			sveltekit(),
			valibot(schema, {
				ignoreEnvPrefix: true,
				transformValues: true
			})
		]
	};
});
