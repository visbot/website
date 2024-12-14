<script lang="ts">
	import ReleaseSection from '$components/ReleaseSection/ReleaseSection.svelte';
	import { meta as store } from '$stores/meta';
</script>

<main>
	{#if Object.keys($store)?.length}
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
	{:else}
		<div class="no-releases">Sorry, no releases found.</div>
	{/if}
</main>
