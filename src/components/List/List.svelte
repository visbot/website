<script lang="ts">
	export let data;
</script>

<ul>
	{#each data as release}
		<li class="flex space-x-4">
			<div class="inline-block md:block">{release.id.toLowerCase()}</div>
			<div class="divider border-t-2 border-neutral-400 border-dotted mt-4 dark:border-neutral-400 hidden sm:block" />
			<div class="inline-block md:block">
				<a href="/downloads/{release.id}.zip" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{release.name.toLowerCase()}</a>{#if release.geoblock}*{/if}
				by
				<span class="text-red-600 dark:text-rose-400">{release.byline.toLowerCase()}</span>
			</div>
		</li>
	{/each}
</ul>

<style>
	.divider {
		flex: 1 1 0;
	}
</style>
