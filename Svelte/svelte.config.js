import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@ptkdev/sveltekit-electron-adapter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false,
			pages: "../Electron/src/html/",
		}),
	},
	preprocess: [vitePreprocess({})],
};

export default config;
