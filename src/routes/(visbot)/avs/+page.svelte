<script lang="ts">
	const vanilla = ['vis_avs-2.2', 'vis_avs-2.5.1', 'vis_avs-2.5', 'vis_avs-2.6.0', 'vis_avs-2.6.1', 'vis_avs-2.7pre8', 'vis_avs-2.70a', 'vis_avs-2.80', 'vis_avs-2.81b', 'vis_avs-2.81d', 'vis_avs-2.82', 'vis_avs-2.83'];

	const avsmod = ['vis_avsmod-2.81b', 'vis_avsmod-2.81d'];

	const chavs = ['vis_chavs-2.9', 'vis_chavsmod-2.9.1', 'vis_chavsmod-2.9'];
</script>

<main>
	<section class="bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 box-shadow sm:mb-4">
		<h1 class="font-semibold mt-2">avs versions</h1>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each vanilla as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each avsmod as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each chavs as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="list-disc m-2">
				<li class="flex space-x-2">
					<a href={`https://github.com/visbot/vis_avs`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">vis_avs source</a>
					<a href={`https://github.com/visbot/chavs`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">vis_chavs source</a>
				</li>
			</ul>
		</span>
	</section>
</main>
