<script lang="ts">
	import { meta as store } from '$stores/meta';
	import metaData from '../../meta.json';

	let searchValue = '';
	let selectedArtist = '';
	let selectedType = '';
	let selectedSeries = '';

	const searchHandler = () => {
		selectedArtist = '';
		selectedType = '';
		selectedSeries = '';

		const value = searchValue.toLowerCase();

		if (value?.length && value !== '@') {
			store.set(
				metaData.filter((item) => {
					if (value.startsWith('@') && value.length > 1) {
						return item.artists.find((item) => item.toLowerCase().startsWith(selectedArtist || value.replace('@', '')));
					} else if (value.startsWith('@')) {
						return item;
					}

					if (value.startsWith('#') && value.length > 1) {
						return item.type.toLowerCase().startsWith(value.replace('#', ''));
					} else if (value.startsWith('#')) {
						return item;
					}

					if (item?.name?.length) {
						return item.name.toLowerCase().includes(value);
					}
				})
			);
		} else {
			store.set(metaData);
		}
	};

	function artistHandler(e = null) {
		searchValue = '';
		searchHandler();

		const value = (e?.target?.value || selectedArtist)?.toLowerCase();

		if (value?.length) {
			store.set($store.filter((item) => item.artists.find((item) => item.toLowerCase().startsWith(value))));
		} else {
			store.set(metaData);
		}
	}

	function typeHandler(e = null) {
		searchValue = '';
		searchHandler();

		const value = (e?.target?.value || selectedType)?.toLowerCase();

		if (value?.length) {
			store.set($store.filter((item) => item.type === value));
		} else {
			store.set(metaData);
		}
	}

	function seriesHandler(e = null) {
		searchValue = '';
		searchHandler();

		const value = (e?.target?.value || selectedSeries)?.toLowerCase();

		if (value?.length) {
			store.set($store.filter((item) => item.id.toLowerCase().startsWith(`v${value}`)));
		} else {
			store.set(metaData);
		}
	}
</script>

<div class="hidden sm:flex flex-wrap sm:gap-x-4">
	<input class="grow bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" type="text" placeholder="search..." on:keyup={searchHandler} bind:value={searchValue} />

	<div class="flex justify-evenly grow gap-x-4">
		<select class="placeholder-neutral-500 bg-white grow sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" on:change={artistHandler} bind:value={selectedArtist}>
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

		<select class="grow bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" on:change={typeHandler} bind:value={selectedType}>
			<option value="">-- Type --</option>
			<option value="album">Album</option>
			<option value="compilation">Compilation</option>
			<option value="single">Single</option>
		</select>

		<select class="grow bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4 box-shadow" on:change={seriesHandler} bind:value={selectedSeries}>
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
