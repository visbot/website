<script lang="ts">
	import { New } from '$components/New';
	export let data;
</script>

<ol>
	{#each data as release}
		<li class="flex space-x-2">
			<div class="inline-block md:block">{release.id.toLowerCase()}</div>
			<div class="divider border-t-2 border-neutral-400 border-dotted mt-4 dark:border-neutral-400 hidden sm:block" />

			<div class="inline-block md:block">
				{#if release.tba}
					<span title="To be announced">{release.name?.toLowerCase() || 't.b.a.'}</span>
				{:else if release.deleted}
					<del title="This item has been deleted from the catalogue" class="decoration-black text-red-600">{release.name?.toLowerCase() || 't.b.a.'}</del>
				{:else}
					<!-- <a href="/download/?catalogue={release.id}&type=executable" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{release.name.toLowerCase()}</a>{#if release.geoblock?.length}<span class="cursor-help" title="Formerly a Japan exclusive pack">*</span>{/if} -->
					<a href="/files/packs/{release.id}.exe.zip" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{release.name.toLowerCase()}</a>{#if release.geoblock?.length}<span class="cursor-help" title="Formerly a Japan exclusive pack">*</span>{/if}
				{/if}
				by
				<span class="text-red-600 dark:text-rose-400">{release.byline.toLowerCase()}</span>
			</div>

			{#if release.is_new}
				<New />
			{/if}
		</li>
	{/each}
</ol>

<style>
	.divider {
		flex: 1 1 0;
	}
</style>
