import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
	...eslintPluginSvelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: ts.parser
			}
		},
		rules: {
			curly: 'error',
			'svelte/block-lang': [
				'error',
				{
					enforceScriptPresent: false,
					enforceStylePresent: false,
					script: ['ts', null],
					style: ['postcss', 'scss']
				}
			],
			'svelte/button-has-type': [
				'error',
				{
					button: true,
					reset: true,
					submit: true
				}
			],
			'svelte/no-at-html-tags': 'warn'
		}
	}
];
