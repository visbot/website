<script lang="ts">
	import { meta as store } from '$stores/meta';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { members } from '$lib/config';
	import { onMount } from 'svelte';
	import metaData from '$data/meta.jsonc';

	const searchParams = new URLSearchParams($page.url.search);
	let searchInput = $state();
	let searchValue = $state(searchParams.get('search') || '');
	let selectedArtist = $state(searchParams.get('artist') || '');
	let selectedType = $state(searchParams.get('type') || '');
	let selectedSeries = $state(searchParams.get('series') || '');
	let searchText = $state('search');
	let hasFilters = $state(false);

	const memberSlugs = members.map((member) => member.slug);

	onMount(() => {
		searchText =
			navigator.userAgent.includes('Mac OS') || navigator.userAgent.includes('macOS')
				? 'cmd+k to search'
				: 'ctrl+k to search';
		filterHandler();
	});

	const globalHandler = (e) => {
		const isK = e.key === 'k';

		switch (true) {
			case e.metaKey && isK:
			case e.ctrlKey && isK:
				e.preventDefault();
				searchInput.focus();
				break;

			default:
				break;
		}
	};

	const normalizeName = (name: string) => {
		return name.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
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
			currentFilter = currentFilter.filter(
				(item) =>
					normalizeName(item.name)?.includes(search) ||
					normalizeName(item.id)?.includes(search) ||
					normalizeName(item.byline)?.includes(search)
			);
		} else {
			newSearchParams.delete('search');
		}

		if (artist === 'others') {
			newSearchParams.set('artist', artist);
			currentFilter = currentFilter.filter((item) => {
				return item.artists.find((artist) => !memberSlugs.includes(artist));
			});
		} else if (artist?.length) {
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

		hasFilters = (search + artist + type + series).length > 0;

		if (searchParamsString?.length) {
			goto(`?${searchParamsString}`);
		} else {
			goto('/');
		}

		store.set(currentFilter);
	};

	const resetHandler = () => {
		hasFilters = false;
		searchValue = '';
		selectedArtist = '';
		selectedType = '';
		selectedSeries = '';

		store.set(metaData);
		goto('/');
	};
</script>

<svelte:window onkeydown={globalHandler} />

<form class="filters">
	<input
		name="search"
		type="text"
		placeholder={searchText}
		aria-label="Search for a release"
		bind:this={searchInput}
		bind:value={searchValue}
		onchange={filterHandler}
	/>

	<div class="input-group">
		<select name="artist" aria-label="Select an artist" bind:value={selectedArtist} onchange={filterHandler}>
			<option value="">-- Artist --</option>
			{#each members as member}
				<option value={member.slug}>{member.name}</option>
			{/each}
			<option value="others">& others</option>
		</select>

		<select name="type" aria-label="Select a release type" bind:value={selectedType} onchange={filterHandler}>
			<option value="">-- Type --</option>
			<option value="album">Album</option>
			<option value="compilation">Compilation</option>
			<option value="single">Single</option>
		</select>

		<select name="series" aria-label="Select a release series" bind:value={selectedSeries} onchange={filterHandler}>
			<option value="">-- Series --</option>
			<option value="a">A is for Allstar</option>
			<option value="b">B is for (Vis)Bot</option>
			<option value="c">C is for Compilation</option>
			<option value="d">D is for Dynamic</option>
			<option value="e">E is for External</option>
		</select>

		<button
			class="reset-filters"
			class:has-filters={hasFilters}
			type="button"
			aria-label="Reset all filters"
			onclick={resetHandler}>&times;</button
		>
	</div>
</form>

<style lang="postcss">
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
