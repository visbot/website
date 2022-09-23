<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import '@lufrai/modern-css-reset';
	import { Chat, GitHub, Twitter } from '$components/Icon';
	import { ReleaseSection } from '$components/ReleaseSection';
	import { meta as store } from '$stores/meta';
</script>

<svelte:head>
	<title>visbot network</title>
  <meta name="description" content="A collective of artists creating Winamp visuals">
</svelte:head>

<div class="font-mono lg:max-w-screen-lg bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:m-8 lg:mx-auto">
	<nav class="font-semibold ">
		<span>VISBOT NETWORK</span>
		<ul class="float-right">
			<li class="inline-block">
				<a href="https://twitter.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Follow us on Twitter">
					<Twitter />
				</a>
			</li>
			<li class="inline-block">
				<a href="https://github.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Find our projects on GitHub">
					<GitHub />
				</a>
			</li>
      <li class="inline-block">
        <a href="https://discord.gg/ezRVJEvu" class="hover:text-red-500 dark:hover:text-rose-400" title="Join our Discord channel">
          <Chat />
        </a>
      </li>
    </ul>
  </nav>
	<main>
		<ReleaseSection
			title="Allstar Series"
			heading="VALLSTAR"
			data={$store
				.filter((item) => item.id.startsWith('VA'))
				.sort()
				.reverse()}
		/>
		<ReleaseSection
			title="Visbot Series"
			heading="VBOT"
			data={$store
				.filter((item) => item.id.startsWith('VB'))
				.sort()
				.reverse()}
		/>
		<ReleaseSection
			title="Compilation Series"
			heading="VCOMPILATION"
			data={$store
				.filter((item) => item.id.startsWith('VC'))
				.sort()
				.reverse()}
		/>
		<ReleaseSection
			title="Dynamic Movement Series"
			heading="VDYNAMIC"
			data={$store
				.filter((item) => item.id.startsWith('VD'))
				.sort()
				.reverse()}
		/>
		<ReleaseSection
			title="External Series"
			heading="VEXTERNAL"
			data={$store
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
		background-image: url('/tile.png');
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: #414141;
		}
	}
</style>
