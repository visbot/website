<script lang="ts">
	import { onMount } from 'svelte';
	import LoginForm from '$components/WordpressLogin/LoginForm.svelte';
	import LostPasswordForm from '$components/WordpressLogin/LostPasswordForm.svelte';

	onMount(async () => {
		const login = document.querySelector('#login');
		login.removeAttribute('hidden');

		// Mimicking default WordPress behaviour
		document.body.classList.add('login', 'js', 'login-action-login', 'wp-core-ui', 'locale-en-us');
	});
</script>

<LoginForm />
<LostPasswordForm />
