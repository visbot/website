<script lang="ts">
	import { ReleaseSection } from '$components/ReleaseSection';
  import { meta as store } from '$stores/meta';
</script>

<main class="bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0">
  <ReleaseSection
    title="Allstar Series"
    heading="VALLSTAR"
    data={$store
      .filter((item) => item.id.startsWith('VA'))
      .sort()
      .reverse()}
  />
  <ReleaseSection
    title="Visbot Series"
    heading="VBOT"
    data={$store
      .filter((item) => item.id.startsWith('VB'))
      .sort()
      .reverse()}
  />
  <ReleaseSection
    title="Compilation Series"
    heading="VCOMPILATION"
    data={$store
      .filter((item) => item.id.startsWith('VC'))
      .sort()
      .reverse()}
  />
  <ReleaseSection
    title="Dynamic Movement Series"
    heading="VDYNAMIC"
    data={$store
      .filter((item) => item.id.startsWith('VD'))
      .sort()
      .reverse()}
  />
  <ReleaseSection
    title="External Series"
    heading="VEXTERNAL"
    data={$store
      .filter((item) => item.id.startsWith('VE'))
      .sort()
      .reverse()}
  />
</main>
