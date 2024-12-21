<script lang="ts">
	import '@lufrai/modern-css-reset';
	import Nav from '$components/Nav/Nav.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>the visbot archive | visbot network</title>
	<meta name="description" content="A collective of artists creating Winamp visuals" />
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="container">
	<Nav />
	{@render children?.()}
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		background-color: #fff;
		background-image: url('/tile.png');
	}

	.box-shadow {
		box-shadow: 0.33rem 0.33rem 0 0 #000;
	}

	@media (prefers-color-scheme: dark) {
		body {
			background-color: #414141;
		}

		.box-shadow {
			box-shadow: 0.33rem 0.33rem 0 0 #e5e5e5;
		}
	}

	@layer components {
		.container {
			@apply font-mono sm:pt-4 md:text-lg lg:mx-auto lg:max-w-screen-lg;
		}

		.no-releases {
			@apply box-shadow my-0 border-black bg-white p-4 lowercase sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white;
		}

		.filters {
			@apply hidden flex-wrap sm:flex sm:gap-x-4;
		}

		input[name='search'] {
			@apply box-shadow my-0 grow border-black bg-white p-4 sm:mb-4 sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white;
		}

		.input-group {
			@apply flex grow justify-evenly gap-x-4;
		}

		select {
			@apply box-shadow my-0 grow border-black bg-white p-4 placeholder-neutral-500 sm:mb-4 sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white;
		}

		.reset-filters {
			@apply box-shadow my-0 grow border-black bg-white p-4 text-xl hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-black sm:mb-4 sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white dark:hover:bg-rose-400 dark:hover:text-black disabled:dark:bg-black disabled:dark:text-white;
		}

		.has-filters {
			@apply bg-red-600 text-white hover:bg-black hover:text-red-600 dark:bg-rose-400 dark:hover:text-rose-400;
		}

		section {
			@apply box-shadow my-0 border-black bg-white p-4 sm:mb-4 sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white;
		}

		section h1 {
			@apply mb-2 mt-2 font-semibold;
		}

		nav {
			@apply box-shadow my-0 border-black bg-white p-4 font-semibold sm:mb-4 sm:border-2 dark:border-neutral-200 dark:bg-neutral-900 dark:text-white;
		}

		nav ul {
			@apply float-right lowercase;
		}

		nav li {
			@apply mr-2 hidden sm:inline-block;
		}

		div[role='navigation'] li {
			@apply hidden sm:inline-block;
		}

		[role='navigation'] {
			@apply mb-4;
		}

		.red {
			@apply text-red-600 dark:text-rose-400;
		}

		a.red {
			@apply hover:bg-red-600 hover:text-white dark:hover:bg-rose-400;
		}

		.divider {
			@apply mt-4 hidden border-t-2 border-dotted border-neutral-400 sm:block dark:border-neutral-400;
		}
	}
</style>
