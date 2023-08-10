<script lang="ts">
	import { onMount } from 'svelte';
	import { LoginForm, LostPasswordForm } from '$components/WordpressLogin';

	let isLogin = true;

	onMount(async () => {
		const login = document.querySelector('#login');
		login.removeAttribute('hidden');

		// Mimicking default WordPress behaviour
		document.body.classList.add('login', 'js', 'login-action-login', 'wp-core-ui', 'locale-en-us');

		const searchParams = new URLSearchParams(window.location.search);
		isLogin = searchParams.has('action') && searchParams.get('action') === 'lostpassword' ? false : true;
	});
</script>

<LoginForm hidden={!isLogin} />
<LostPasswordForm hidden={isLogin} />
