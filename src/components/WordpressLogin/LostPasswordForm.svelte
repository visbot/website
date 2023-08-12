<script lang="ts">
	import { callback } from '$lib/callback';
	import { onMount } from 'svelte';
	import { randomResponse } from '$lib/util';
	import { page } from '$app/stores';

	let hidden = true;

	let hasError = false;
	let errorMessage = '';

	let formElement: HTMLFormElement;
	let passwordInput: HTMLInputElement;
	let userLogin: string = '';

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);
		hidden = searchParams.has('action') && searchParams.get('action') === 'lostpassword' ? false : true;

		// Mimicking default WordPress behaviour
		passwordInput.focus();
	});

	const submitHandler = () => {
		const data = new URLSearchParams();

		for (const pair of new FormData(formElement)) {
			data.append(pair[0], String(pair[1]));
		}

		if (data.size > 0) {
			fetch($page.url.href, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: data
			});
		}

		setTimeout(() => {
			if (userLogin.length) {
				errorMessage = 'There is no account with that username or email address.';
			} else {
				errorMessage = 'Please enter a username or email address.';
			}

			hasError = true;
		}, randomResponse());

		callback({
			'form-name': 'lostpasswordform',
			user: userLogin,
			timestamp: Date.now()
		});
	};
</script>

<svelte:head>
	{#if !hidden}
		<title>Lost Password &lsaquo; {import.meta.env.VITE_SITE_NAME ? `${import.meta.env.VITE_SITE_NAME} — WordPress` : 'WordPress'}</title>
	{/if}
</svelte:head>

<p class="message" {hidden}>Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>

{#if hasError}
	<div id="login_error" {hidden}>
		<strong>Error</strong>: {@html errorMessage}<br />
	</div>
{/if}

<form data-netlify="true" name="lostpasswordform" id="lostpasswordform" action="/wp-login.php?action=lostpassword" method="post" class:shake={hasError} on:submit|preventDefault={submitHandler} bind:this={formElement} {hidden}>
	<!-- Required for Netlify Forms -->
	<input type="hidden" name="form-name" value="lostpasswordform" />

	<p>
		<label for="user_login">Username or Email Address</label>
		<input type="text" name="user_login" id="user_login" class="input" bind:value={userLogin} size="20" autocapitalize="off" bind:this={passwordInput} />
	</p>

	<input type="hidden" name="redirect_to" value="" />

	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Get New Password" />
	</p>
</form>

<p id="nav" {hidden}>
	<a data-sveltekit-reload href="wp-login.php">Log in</a>
</p>
