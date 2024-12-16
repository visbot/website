<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<section>
		<h1>the visbot archive</h1>

		<p>
			this is a general collection of avs packs of artists not affiliated with visbot, or created before their
			membership.
		</p>
	</section>

	<section>
		<div role="navigation">
			<ul>
				<li>
					{#if data.pathname.length}
						<a class="red" href="/archive">archive</a>
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
							<a class="red" href="/{folder}">
								{folder}
							</a>
						</div>
						<div class="divider"></div>
						<div class="inline-block md:block">&lt;dir&gt;</div>
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
