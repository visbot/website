<script lang="ts">
	import '@lufrai/modern-css-reset';
	import { onMount } from 'svelte';

	import { Nav } from '$components/Nav';

	onMount(async () => {
		const { file_id }: { file_id: string[] } = await import('@visbot/file_id.diz');
		console.log(file_id.join('\n'));

		window['get'] = (file) => {
			const link: HTMLAnchorElement = document.querySelector(`a[href$="file=${file.toUpperCase()}.exe.zip"]`);

			if (link) {
				link.click();
			}
		};
	});
</script>

<svelte:head>
	<title>visbot network</title>
	<meta name="description" content="A collective of artists creating Winamp visuals" />
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="font-mono lg:max-w-screen-lg lg:mx-auto sm:pt-4">
	<Nav />
	<slot />
</div>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		background-color: #fff;
		background-image: url('/tile.png');
	}

	:global(.box-shadow) {
		box-shadow: 0.33rem 0.33rem 0 0 #000;
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: #414141;
		}

		:global(.box-shadow) {
			box-shadow: 0.33rem 0.33rem 0 0 #e5e5e5;
		}
	}
</style>
