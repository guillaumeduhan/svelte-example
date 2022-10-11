<script>
	import { userStore } from '@/stores.js';
	export const position = 'vertical';
	import Col from 'sveltestrap/src/Col.svelte';
	import Nav from 'sveltestrap/src/Nav.svelte';
	import NavLink from 'sveltestrap/src/NavLink.svelte';
	import Icon from 'sveltestrap/src/Icon.svelte';

	export const slugs = [
		{
			title: 'Dashbaord',
			link: '/dashboard',
			icon: 'house'
		},
		{
			title: 'Documents',
			link: '/documents',
			icon: 'folder'
		},
		{
			title: 'Contrats',
			link: '/contrats',
			icon: 'document'
		},
		{
			title: 'Utilisateurs',
			link: '/utilisateurs',
			icon: 'person'
		}
	];

	export let bg;
	export let isLoggedIn;

	userStore.subscribe((value) => {
		isLoggedIn = value.isLoggedIn;
	});
</script>

{#if isLoggedIn}
	 <Col sm="1" class="p-0 py-5 bg-warning text-end">
		 <Nav vertical class="vh-100">
			 {#each slugs as slug}
				 <NavLink href={slug.link} class={'bg-' + bg}>
					/ <Icon name={slug.icon} />\{slug.title}
				</NavLink>
			 {/each}
		 </Nav>
	 </Col>
{/if}
