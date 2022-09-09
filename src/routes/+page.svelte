<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { Section } from '$components/Section';
	import metaData from '../meta.json';
</script>

<svelte:head>
	<title>VISBOT NETWORK | visbot network</title>
</svelte:head>

<div class="font-mono lg:max-w-screen-lg bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:m-8 lg:mx-auto">
	<nav class="font-semibold ">
		<span>VISBOT NETWORK</span>
		<ul class="float-right">
			<li class="inline-block">
				<a href="https://twitter.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Follow us on Twitter">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
				</a>
			</li>
			<li class="inline-block">
				<a href="https://discord.gg/ezRVJEvu" class="hover:text-red-500 dark:hover:text-rose-400" title="Join our Discord channel">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
				</a>
			</li>
			<li class="inline-block">
				<a href="https://github.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Find our projects on GitHub">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
				</a>
			</li>
		</ul>
	</nav>
	<main>
		<Section
			title="Allstar Series"
			heading="VALLSTAR"
			data={metaData
				.filter((item) => item.id.startsWith('VA'))
				.sort()
				.reverse()}
		/>
		<Section
			title="Visbot Series"
			heading="VBOT"
			data={metaData
				.filter((item) => item.id.startsWith('VB'))
				.sort()
				.reverse()}
		/>
		<Section
			title="Compilation Series"
			heading="VCOMPILATION"
			data={metaData
				.filter((item) => item.id.startsWith('VC'))
				.sort()
				.reverse()}
		/>
		<Section
			title="Dynamic Movement Series"
			heading="VDYNAMIC"
			data={metaData
				.filter((item) => item.id.startsWith('VD'))
				.sort()
				.reverse()}
		/>
		<Section
			title="External Series"
			heading="VEXTERNAL"
			data={metaData
				.filter((item) => item.id.startsWith('VE'))
				.sort()
				.reverse()}
		/>
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		background-color: #fff;
		background-image: url('/tile@light.png');
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			/* background-color: #000; */
			background-image: url('/tile@dark.png');
		}
	}
</style>
