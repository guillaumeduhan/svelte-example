import { sveltekit } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		sveltePreprocess(),
		// MyPlugin.transform // This is doable, but prevents using more vite features.
	],
	plugins: [sveltekit()],
	server: {
		port: 2600
	},
	ssr: {
		noExternal: ['@popperjs/core']
	}
};

export default config;
