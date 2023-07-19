<script lang="ts">
	import { meta as store } from '$stores/meta';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { members } from '$lib/config';
	import { onMount } from 'svelte';
	import metaData from '../../meta.json';

	const searchParams = new URLSearchParams($page.url.search);
	let searchInput;
	let searchValue = searchParams.get('search') || '';
	let selectedArtist = searchParams.get('artist') || '';
	let selectedType = searchParams.get('type') || '';
	let selectedSeries = searchParams.get('series') || '';
	let searchText = 'search';

	onMount(() => {
		searchText = navigator.userAgent.includes('Mac OS') || navigator.userAgent.includes('macOS') ? 'cmd+k to search' : 'ctrl+k to search';
		filterHandler();
		console.log({ members });
	});

	const globalHandler = (e) => {
		const isK = e.key.toLowerCase() === 'k';

		switch (true) {
			case e.metaKey && isK:
			case e.controlKey && isK:
				searchInput.focus();
				break;

			default:
				break;
		}
	};

	const filterHandler = () => {
		const search = decodeURIComponent(searchValue)?.toLowerCase() || '';
		const artist = selectedArtist?.toLowerCase();
		const type = selectedType?.toLowerCase();
		const series = selectedSeries?.toLowerCase();

		const newSearchParams = new URLSearchParams();
		let currentFilter = metaData;

		if (search?.length) {
			newSearchParams.set('search', search);
			currentFilter = currentFilter.filter((item) => item.name?.toLowerCase().includes(search) || item.id?.toLowerCase().includes(search) || item.byline?.toLowerCase().includes(search));
		} else {
			newSearchParams.delete('search');
		}

		if (artist?.length) {
			newSearchParams.set('artist', artist);
			currentFilter = currentFilter.filter((item) => item.artists.find((item) => item?.toLowerCase() === artist));
		} else {
			newSearchParams.delete('artist');
		}

		if (type?.length) {
			newSearchParams.set('type', type);
			currentFilter = currentFilter.filter((item) => item.type === type);
		} else {
			newSearchParams.delete('type');
		}

		if (series?.length) {
			newSearchParams.set('series', series);
			currentFilter = currentFilter.filter((item) => item.id?.toLowerCase().startsWith(`v${series}`));
		} else {
			newSearchParams.delete('series');
		}

		const searchParamsString = newSearchParams.toString();

		if (searchParamsString?.length) {
			goto(`?${searchParamsString}`);
		} else {
			goto('/');
		}

		store.set(currentFilter);
	};

	const resetHandler = () => {
		searchValue = '';
		selectedArtist = '';
		selectedType = '';
		selectedSeries = '';

		store.set(metaData);
		goto('/');
	};
</script>

<svelte:window on:keydown={globalHandler} />

<form class="hidden sm:flex flex-wrap sm:gap-x-4">
	<input name="search" class="grow bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" type="text" placeholder={searchText} aria-label="Search for a release" bind:this={searchInput} bind:value={searchValue} on:change={filterHandler} />

	<div class="flex justify-evenly grow gap-x-4">
		<select name="artist" class="placeholder-neutral-500 bg-white grow sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" aria-label="Select an artist" bind:value={selectedArtist} on:change={filterHandler}>
			<option value="">-- Artist --</option>
			{#each members as member}
				<option value={member.slug}>{member.name}</option>
			{/each}
		</select>

		<select name="type" class="grow bg-white sm:border-2 border-black dark:bg-neutral-900 dark:border-neutral-200 dark:text-white p-4 my-0 sm:mb-4 box-shadow" aria-label="Select a release type" bind:value={selectedType} on:change={filterHandler}>
			<option value="">-- Type --</option>
			<option value="album">Album</option>
			<option value="compilation">Compilation</option>
			<option value="single">Single</option>
		</select>

		<select name="series" class="grow bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" aria-label="Select a release series" bind:value={selectedSeries} on:change={filterHandler}>
			<option value="">-- Series --</option>
			<option value="a">A is for Allstar</option>
			<option value="b">B is for (Vis)Bot</option>
			<option value="c">C is for Compilation</option>
			<option value="d">D is for Dynamic</option>
			<option value="e">E is for External</option>
		</select>

		<button class="text-xl grow bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow hover:bg-red-600 hover:text-white dark:hover:bg-rose-400 dark:hover:text-black disabled:bg-white disabled:text-black disabled:dark:bg-black disabled:dark:text-white disabled:cursor-not-allowed" type="button" aria-label="Reset all filters" on:click={resetHandler}>&times;</button>
	</div>
</form>

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
