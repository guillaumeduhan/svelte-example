<script>
	import Col from 'sveltestrap/src/Col.svelte';
	import Nav from 'sveltestrap/src/Nav.svelte';
	import NavLink from 'sveltestrap/src/NavLink.svelte';
	import Icon from 'sveltestrap/src/Icon.svelte';
	import { DocumentIcon, Contracts, Users } from '$lib/components/Icons';

	export const slugs = [
		{
			title: 'Mes documents',
			link: '/documents',
			component: DocumentIcon
		},
		{
			title: 'Mes contracts',
			link: '/contracts',
			component: Contracts
		},
		{
			title: 'Mes utilisateurs',
			link: '/users',
			component: Users
		}
	];

	export let bg;
</script>

<div class="Sidebar px-2 py-4 bg-light text-left">
	<Nav vertical class="vh-100">
		{#each slugs as slug}
			<NavLink href={slug.link} class={'bg-' + bg}>
				{#if slug.component}
					<svelte:component this={slug.component}/>
				{/if}
				<span class="p-1">{slug.title}</span>
			</NavLink>
		{/each}
	</Nav>
</div>

<style>
	.Sidebar {
		max-width: 100%;
		min-width: 300px;
	}
</style>