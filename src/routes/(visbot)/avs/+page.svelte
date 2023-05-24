<script lang="ts">
	const vanilla = ['vis_avs-2.2', 'vis_avs-2.5.1', 'vis_avs-2.5', 'vis_avs-2.6.0', 'vis_avs-2.6.1', 'vis_avs-2.7pre8', 'vis_avs-2.70a', 'vis_avs-2.80', 'vis_avs-2.81b', 'vis_avs-2.81d', 'vis_avs-2.82', 'vis_avs-2.83'];
	const avsmod = ['vis_avsmod-2.81b', 'vis_avsmod-2.81d'];
	const chavs = ['vis_chavs-2.9', 'vis_chavsmod-2.9.1', 'vis_chavsmod-2.9'];
	const apes = ['addborder', 'buffer', 'channelshift', 'colormap', 'colorreduction', 'convolution', 'delay', 'eeltrans', 'frameratelimiter', 'fyrewurx', 'globmgr', 'multifilter', 'multiplier', 'normalise', 'picture2', 'texer', 'texer2', 'triangle', 'vfxaviplayer'];
</script>

<main class="lowercase">
	<section class="bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 box-shadow sm:mb-4">
		<h1 class="font-semibold mt-2">Advanced Visualization Studio (AVS)</h1>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each vanilla as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
						{#if download.includes('2.81d')}*{/if}
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each avsmod as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
						{#if download.includes('2.81d')}*{/if}
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
					<span><a href="https://visbot.net/files/avs/source/vis_avs-2.81d-src.7z" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">vis_avs-2.81d-src</a></span>
					<span>or <a href="https://github.com/visbot/vis_avs" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">github</a></span>
				</li>
				<li class="flex space-x-2">
					<span><a href="https://visbot.net/files/avs/source/vis_chavs-2.9.1-src.7z" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">vis_chavs-2.9.1-src</a></span>
					<span>or <a href="https://github.com/visbot/chavs" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">github</a></span>
				</li>
			</ul>
		</span>

		<p>* avs versions that are widely considered to be the most compatible</p>
	</section>

	<section class="bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 box-shadow sm:mb-4">
		<h1 class="font-semibold mt-2">Resources</h1>

		<span class="m-2">
			<ul class="list-disc m-2">
				<li class="flex space-x-2">
					<a href="https://visbot.net/files/avs/resources/tuggummi-texer-resources.7z" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">Tuggummi's Texer Resources</a>
				</li>
				<li class="flex space-x-2">
					<a href="https://visbot.net/files/avs/resources/yathosho-texer-resources-extension-pack.7z" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">Yathosho's Texer Resources Extension Pack</a>
				</li>
				<li class="flex space-x-2">
					<a href="https://visbot.net/files/avs/resources/yathosho-mega-texer-pack.7z" class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">Yathosho's Mega Texer Pack</a>
				</li>
			</ul>
		</span>
	</section>

	<section class="bg-white sm:border-2 border-black dark:border-neutral-200 dark:bg-neutral-900 dark:text-white p-4 my-0 box-shadow sm:mb-4">
		<h1 class="font-semibold mt-2">AVS Plugin Effects (APE)</h1>

		<span class="m-2">
			<ul class="list-disc m-2">
				{#each apes as download}
					<li class="flex space-x-2">
						<a href={`https://visbot.net/files/avs/apes/${download}.7z`} class="text-red-600 hover:bg-red-600 dark:text-rose-400 dark:hover:bg-rose-400 hover:text-white">{download}</a>
						{#if download.includes('2.81d')}*{/if}
					</li>
				{/each}
			</ul>
		</span>
	</section>
</main>
