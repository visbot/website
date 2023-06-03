<script lang="ts">
	import { onMount } from 'svelte';
	import { commands } from './commands';

	onMount(async () => {
		const { file_id }: { file_id: string[] } = await import('@visbot/file_id.diz');
		console.clear();
		console.log(file_id.join('\n'));

		window['get'] = commands.get;
		window['help'] = commands.help;
		window['info'] = commands.info;
	});
</script>
