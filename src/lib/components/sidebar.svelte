<script>
	import Col from 'sveltestrap/src/Col.svelte';
	import Nav from 'sveltestrap/src/Nav.svelte';
	import NavLink from 'sveltestrap/src/NavLink.svelte';
	import Icon from 'sveltestrap/src/Icon.svelte';

	export const slugs = [
		{
			title: 'Mes documents',
			link: '/documents',
			icon: 'folder'
		},
		{
			title: 'Mes contracts',
			link: '/contracts',
			icon: 'document'
		},
		{
			title: 'Mes utilisateurs',
			link: '/users',
			icon: 'person'
		}
	];

	export let bg;
</script>

<div class="Sidebar px-2 py-4 bg-light text-left">
	<Nav vertical class="vh-100">
		{#each slugs as slug}
			<NavLink href={slug.link} class={'bg-' + bg}>
				{slug.title}
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