<script lang="ts">
	import { Chat, GitHub, Mastodon } from '$components/Icon';
	import { meta as store } from '$stores/meta';
	import metaData from '../../meta.json';
</script>

<nav class="font-semibold bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow">
	<h1>VISBOT NETWORK</h1>
	<ul class="float-right">
		<li class="inline-block">
			<a href="https://mastodon.social/@visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Follow us on Mastodon" target="_blank" rel="me noreferrer">
				<Mastodon />
			</a>
		</li>
		<li class="inline-block">
			<a href="https://discord.gg/ezRVJEvu" class="hover:text-red-500 dark:hover:text-rose-400" title="Join our Discord channel" target="_blank" rel="noreferrer">
				<Chat />
			</a>
		</li>
		<li class="inline-block">
			<a href="https://github.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Find our projects on GitHub" target="_blank" rel="me noreferrer">
				<GitHub />
			</a>
		</li>
	</ul>
</nav>

<style>
	h1 {
		display: inline;
	}
</style>
