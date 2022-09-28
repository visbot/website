<script lang="ts">
	import { ReleaseList } from '$components/ReleaseList';

	export let title;
	export let heading;
	export let data;
</script>

{#if data?.length}
  <section>
    <h1 class="font-semibold mt-8 mb-2" {title}>{heading}</h1>
    <ReleaseList {data} />
  </section>
{/if}
