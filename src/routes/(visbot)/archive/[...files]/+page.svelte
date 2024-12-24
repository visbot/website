<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="lowercase">
	<section>
		<h1>The VISBOT Archive</h1>

		<p>
			A collection of Winamp AVS packs released throughout the years. The packs included in this collection are not
			affiliated with VISBOT, but may contain packs by some of our members e.g. before they became members.
		</p>

		<p class="mt-4">
			Packages marked as "unofficial" are plain archives since the original installer is no longer available.
		</p>
	</section>

	<section>
		<div role="navigation">
			<ul>
				<li>
					{#if data.pathname.length}
						<a class="red" href="/archive">Archive</a>
					{:else}
						archive
					{/if}
				</li>

				{#if data.pathname.length}
					<li>
						/ {data.pathname}
					</li>
				{/if}
			</ul>
		</div>

		<ol class="w-full">
			{#each data.folders as folder}
				{#if folder?.length}
					<li class="flex space-x-2">
						<div class="inline-block md:block">
							<a class="red" href="/archive/{folder}">
								{folder}
							</a>
						</div>
						<div class="divider"></div>
						<div class="inline-block md:block">[ dir ]</div>
					</li>
				{/if}
			{/each}

			{#each data.packs as pack}
				<li class="flex space-x-2">
					<div class="inline-block md:block">
						<a class="red" href={pack.url}>
							{pack.name}
						</a>
					</div>
					<div class="divider"></div>
					<div class="inline-block md:block">{pack.size}</div>
				</li>
			{/each}
		</ol>
	</section>
</main>

<style lang="postcss">
	.divider {
		flex: 1 1 0;
	}
</style>
