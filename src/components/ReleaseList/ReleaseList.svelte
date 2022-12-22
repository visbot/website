<script lang="ts">
	export let data;
</script>

<ol>
	{#each data as release}
		<li class="flex space-x-4">
			<div class="inline-block md:block">{release.id.toLowerCase()}</div>
			<div class="divider border-t-2 border-neutral-400 border-dotted mt-4 dark:border-neutral-400 hidden sm:block" />

			<div class="inline-block md:block">
				{#if release.tba}
					<span title="To be announced">t.b.a.</span>
				{:else}
					<a href="/downloads/packs/{release.id}.exe.zip" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{release.name.toLowerCase()}</a>{#if release.geoblock?.length}<span class="cursor-help" title="Formerly a Japan exclusive pack">*</span>{/if}
				{/if}
				by
				<span class="text-red-600 dark:text-rose-400">{release.byline.toLowerCase()}</span>
			</div>

			{#if release.is_new}
				<img class="self-center" src="new.gif" alt="New release." />
			{/if}
		</li>
	{/each}
</ol>

<style>
	.divider {
		flex: 1 1 0;
	}

	img {
		width: 25px;
		height: 9px;
	}
</style>
