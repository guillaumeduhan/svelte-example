<script context="module">
	import { loadTranslations } from '$lib/i18n/index.js';

	/**
 	* sveltestrap
	*/
	import Container from 'sveltestrap/src/Container.svelte';
	import Col from 'sveltestrap/src/Col.svelte';
	import Row from 'sveltestrap/src/Row.svelte';

	/**
	 * custom
	 */
	import Nav from '../lib/components/sidebar.svelte';

	/** @type {import('@sveltejs/kit').Load} */
	async function load({ url }) {
		const { pathname } = url;
		const lang = 'en';

		const route = pathname.replace(new RegExp(`^/${lang}`), '');

		await loadTranslations(lang, route);

		return { stuff: { route, lang } };
	}

	function handleMain() {
		userStore.set({
			isLoggedIn: false
		});
		goto('/');
	}
</script>

<script>
	import { userStore } from '@/stores.js';
	import { goto } from '$app/navigation';
</script>

<Container fluid>
	<Row>
		<Nav />
		<Col>
			<main>
				<h1 on:click={handleMain} class="text-center">Main layout</h1>
				<slot />
			</main>
		</Col>
	</Row>
</Container>

	<!-- <div class="container" style="padding: 50px 0 100px 0">
      {#if !session}
        <Auth />
      {:else}
        <Account {session} />
      {/if}
    </div> -->

<style>
	.toggler:hover {
		cursor: pointer;
	}
	.toto {
		max-width: 10% !important;
	}
	.parent-toggler {
		max-width: 50px;
	}
</style>
