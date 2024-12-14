<script lang="ts">
	import { apes, avsMod, cockosAvs, standardAvs } from '$/lib/config';
</script>

<main class="lowercase">
	<!--
    TL;DR
   -->
	<section>
		<h1>TL;DR</h1>

		<span class="m-2">
			<p>
				If you don't care about the specifics, this
				<a href={`https://files.visbot.net/avs/avs-starter-pack.7z`} class="red">AVS Starter Pack</a>
				is probably for you then!
			</p>
		</span>
	</section>

	<!--
    AVS
   -->
	<section>
		<h1 id="avs">Advanced Visualization Studio (AVS)</h1>

		<span class="m-2">
			<ul class="m-2 list-disc">
				{#each standardAvs as download}
					<li class="flex space-x-2">
						<a href={`https://files.visbot.net/avs/${download}.7z`} class="red">{download}.dll</a>
						{#if download.includes('2.81d')}<span title="AVS Versions that are widely considered to be the most compatible">*</span>{/if}
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="m-2 list-disc">
				{#each avsMod as download}
					<li class="flex space-x-2">
						<a href={`https://files.visbot.net/avs/${download}.7z`} class="red">{download}.dll</a>
						{#if download.includes('2.81d')}<span title="AVS Versions that are widely considered to be the most compatible">*</span>{/if}
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="m-2 list-disc">
				{#each cockosAvs as download}
					<li class="flex space-x-2">
						<a href={`https://files.visbot.net/avs/${download}.7z`} class="red">{download}.dll</a>
					</li>
				{/each}
			</ul>
		</span>

		<span class="m-2">
			<ul class="m-2 list-disc">
				<li class="flex space-x-2">
					<span><a href="https://files.visbot.net/avs/source/vis_avs-2.81d-src.7z" class="red">vis_avs-2.81d-src.7z</a></span>
					<span>or <a href="https://github.com/visbot/vis_avs" class="red">github</a></span>
				</li>
				<li class="flex space-x-2">
					<span><a href="https://files.visbot.net/avs/source/vis_chavs-2.9.1-src.7z" class="red">vis_chavs-2.9.1-src.7z</a></span>
					<span>or <a href="https://github.com/visbot/chavs" class="red">github</a></span>
				</li>
			</ul>
		</span>

		<p>* AVS Versions that are widely considered to be the most compatible</p>
	</section>

	<!--
    RESOURCES
   -->
	<section>
		<h1 id="resource">Resources</h1>

		<span class="m-2">
			<ul class="m-2 list-disc">
				<li class="flex space-x-2">
					<a href="https://files.visbot.net/avs/resources/tuggummi-texer-resources.7z" class="red">Tuggummi's Texer Resources</a>
				</li>
				<li class="flex space-x-2">
					<a href="https://files.visbot.net/avs/resources/yathosho-texer-resources-extension-pack.7z" class="red">Yathosho's Texer Resources Extension Pack</a>
				</li>
				<li class="flex space-x-2">
					<a href="https://files.visbot.net/avs/resources/yathosho-mega-texer-pack.7z" class="red">Yathosho's Mega Texer Pack</a>
				</li>
			</ul>
		</span>
	</section>

	<!--
    APEs
   -->
	<section>
		<h1 id="ape">AVS Plugin Effects (APE)</h1>

		<span class="m-2">
			<ul class="m-2 list-disc">
				{#each apes as download}
					<li class="flex space-x-2">
						<a href={`https://files.visbot.net/avs/apes/${download.name}.7z`} class="red">{download.name}.ape</a>
						{#if download.pimpbotDefault}<span title="Comes with installers created using PimpBot">*</span>{/if}
						{#if download.incompatible}<span title="Incompatible with most versions of Winamp">**</span>{/if}
					</li>
				{/each}
			</ul>

			<ul class="m-2">
				<li></li>
				<li class="mt-4 flex space-x-2">* Comes with PimpBot installers</li>
				<li class="flex space-x-2">** incompatible</li>
			</ul>
		</span>

		<span class="m-2">
			<p>
				All of the listed APEs are also part of the
				<a href={`https://files.visbot.net/avs/apes/super-ape-pack.7z`} class="red">Super Ape Pack</a>.
			</p>
		</span>
	</section>
</main>
