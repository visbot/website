<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import '@lufrai/modern-css-reset';
	import { onMount } from 'svelte';

	import { Nav } from '$components/Nav';
	import { Filters } from '$components/Filters';
	import { Main } from '$components/Main';

	onMount(async () => {
		/** @type {string[]} */
		const { file_id } = await import('@visbot/file_id.diz');
		console.log(file_id.join('\n'));
	});
</script>

<svelte:head>
	<title>visbot network</title>
	<meta name="description" content="A collective of artists creating Winamp visuals" />
</svelte:head>

<div class="font-mono lg:max-w-screen-lg lg:mx-auto sm:p-4">
	<Nav />
	<Filters />
	<Main />
</div>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		background-color: #fff;
		background-image: url('/tile.png');
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: #414141;
		}
	}
</style>
