<script lang="ts">
	import { Chat, GitHub, Twitter } from '$components/Icon';
</script>

<nav class="font-semibold bg-white sm:border-2 border-black dark:bg-neutral-900 dark:text-white p-4 my-0 sm:mb-4">
  <span>VISBOT NETWORK</span>
  <ul class="float-right">
    <li class="inline-block">
      <a href="https://twitter.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Follow us on Twitter" target="_blank">
        <Twitter />
      </a>
    </li>
    <li class="inline-block">
      <a href="https://github.com/visbot" class="hover:text-red-500 dark:hover:text-rose-400" title="Find our projects on GitHub" target="_blank">
        <GitHub />
      </a>
    </li>
    <li class="inline-block">
      <a href="https://discord.gg/ezRVJEvu" class="hover:text-red-500 dark:hover:text-rose-400" title="Join our Discord channel" target="_blank">
        <Chat />
      </a>
    </li>
  </ul>
</nav>
