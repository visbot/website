<script lang="ts">
	import ReleaseList from '$components/ReleaseList/ReleaseList.svelte';

	let { title, heading, data } = $props();
</script>

{#if data?.length}
	<section>
		<h1 {title}>{heading}</h1>
		<ReleaseList {data} />
	</section>
{/if}
