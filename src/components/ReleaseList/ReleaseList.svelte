<script lang="ts">
	import New from '$components/New/New.svelte';
	let { data } = $props();
</script>

<ol>
	{#each data as release}
		<li class="flex space-x-2">
			<div class="inline-block md:block">{release.id.toLowerCase()}</div>
			<div class="divider"></div>

			<div class="inline-block md:block">
				{#if release.tba}
					<span title="To be announced">{release.name?.toLowerCase() || 't.b.a.'}</span>
				{:else if release.deleted}
					<del title="This item has been deleted from the catalogue" class="text-red-600 decoration-black">{release.name?.toLowerCase()}</del>
				{:else}
					<a href="/download?file={release.id}.exe.zip" class="red">{release.name.toLowerCase()}</a>{#if release.geoblock?.length}<span class="cursor-help" title="Formerly a Japan exclusive pack">*</span>{/if}
				{/if}
				{#if release.byline}
					by
					<span class="red">{release.byline.toLowerCase()}</span>
				{/if}
			</div>

			{#if release.is_new}
				<New />
			{/if}
		</li>
	{/each}
</ol>

<style lang="postcss">
	.divider {
		flex: 1 1 0;
	}
</style>
