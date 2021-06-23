import { mdsvex } from "mdsvex";
import sveltePreprocess from "svelte-preprocess"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],
	preprocess: [
		mdsvex({
			layout: {
				posts: './src/routes/posts/layout.svelte'
			},
			highlighter: (code, lang) => {
				return `<Components.pre code={\`${escape(code)}\`} lang={\`${lang}\`} />`;
			},
		}),
		sveltePreprocess()
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	}
};

export default config;
