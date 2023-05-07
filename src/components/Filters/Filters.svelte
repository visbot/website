<script lang="ts">
	import { meta as store } from '$stores/meta';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import metaData from '../../meta.json';

	const searchParams = new URLSearchParams($page.url.search);
	let searchValue = searchParams.get('search') || '';
	let selectedArtist = searchParams.get('artist') || '';
	let selectedType = searchParams.get('type') || '';
	let selectedSeries = searchParams.get('series') || '';

	onMount(() => filterHandler());

	const filterHandler = () => {
		const search = searchValue.toLowerCase();
		const artist = selectedArtist.toLowerCase();
		const type = selectedType.toLowerCase();
		const series = selectedSeries.toLowerCase();

		const newSearchParams = new URLSearchParams();
		let currentFilter = metaData;

		if (search?.length) {
			newSearchParams.set('search', search);
			currentFilter = currentFilter.filter((item) => item.name.toLowerCase().includes(search));
		}

		if (artist?.length) {
			newSearchParams.set('artist', artist);
			currentFilter = currentFilter.filter((item) => item.artists.find((item) => item.toLowerCase().startsWith(artist)));
		}

		if (type?.length) {
			newSearchParams.set('type', type);
			currentFilter = currentFilter.filter((item) => item.type === type);
		}

		if (series?.length) {
			newSearchParams.set('series', series);
			currentFilter = currentFilter.filter((item) => item.id.toLowerCase().startsWith(`v${series}`));
		}

		if (newSearchParams.toString().length) {
			window.history.replaceState(null, null, `?${newSearchParams.toString()}`);
		}

		store.set(currentFilter);
	};
</script>

<div class="hidden sm:flex flex-wrap sm:gap-x-4">
	<input class="grow bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" type="text" placeholder="search..." bind:value={searchValue} on:keyup={filterHandler} />

	<div class="flex justify-evenly grow gap-x-4">
		<select class="placeholder-neutral-500 bg-white grow sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" bind:value={selectedArtist} on:change={filterHandler}>
			<option value="">-- Artist --</option>
			<option value="alt-iii">Alt III</option>
			<option value="amphirion">Amphirion</option>
			<option value="avs-king">AVS King</option>
			<option value="danaughty1">Danaughty1</option>
			<option value="duo">Duo</option>
			<option value="dynamic-duo">Dynamic Duo</option>
			<option value="effekthasch">Effekthasch</option>
			<option value="frames-of-reality">Frames-of-Reality</option>
			<option value="grandchild">Grandchild</option>
			<option value="hboy">Hboy</option>
			<option value="javs">JaVS</option>
			<option value="les-noobiens">les Noobiens</option>
			<option value="micro-d">Micro.D</option>
			<option value="nemo-orange">Nemo Orange</option>
			<option value="onionring">Onionring</option>
			<option value="pan-am">PAN AM</option>
			<option value="skupers">Skupers</option>
			<option value="synth-c">Synth-C</option>
			<option value="vanish">Vanish</option>
			<option value="yathosho">Yathosho</option>
			<option value="zamuz">Zamuz</option>
		</select>

		<select class="grow bg-white sm:border-2 border-black dark:bg-neutral-900 dark:border-neutral-200 dark:text-white p-4 my-0 sm:mb-4 box-shadow" bind:value={selectedType} on:change={filterHandler}>
			<option value="">-- Type --</option>
			<option value="album">Album</option>
			<option value="compilation">Compilation</option>
			<option value="single">Single</option>
		</select>

		<select class="grow bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" bind:value={selectedSeries} on:change={filterHandler}>
			<option value="">-- Series --</option>
			<option value="a">A is for Allstar</option>
			<option value="b">B is for (Vis)Bot</option>
			<option value="c">C is for Compilation</option>
			<option value="d">D is for Dynamic</option>
			<option value="e">E is for External</option>
		</select>
	</div>
</div>

<style>
	select {
		text-transform: lowercase;
	}

	::placeholder {
		text-transform: lowercase;
	}

	select {
		-webkit-appearance: none;
		border-radius: 0;
	}
</style>
