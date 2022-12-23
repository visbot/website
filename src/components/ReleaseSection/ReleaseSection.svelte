<script lang="ts">
	import { ReleaseList } from '$components/ReleaseList';

	export let title;
	export let heading;
	export let data;
</script>

{#if data?.length}
	<section class="bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 box-shadow sm:mb-4">
		<h1 class="font-semibold mt-2 mb-2" {title}>{heading}</h1>
		<ReleaseList {data} />
	</section>
{/if}
