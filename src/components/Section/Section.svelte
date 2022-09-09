<script lang="ts">
	import { List } from '$components/List';

	export let title;
	export let heading;
	export let data;
</script>

<section>
	<h1 class="font-semibold mt-8 mb-2" {title}>{heading}</h1>
	<List {data} />
</section>
