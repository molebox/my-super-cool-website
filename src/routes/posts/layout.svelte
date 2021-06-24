<script context="module">
	// the blog posts layout
	import 'prism-themes/themes/prism-dracula.css';
	// the following components are now available in every .svx file and map to common markdown elements such as h1-h6 and p.
	import h1 from '$lib/elements/h1.svelte';
	import h2 from '$lib/elements/h2.svelte';
	import p from '$lib/elements/p.svelte';
	import pre from '$lib/elements/pre.svelte';
	export { h1, h2, p, pre };
</script>

<script>
	export let title;
</script>

<div class="post-page">
	<h1>{title}</h1>
	<slot />
</div>

<style lang="scss">
	.post-page {
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		max-width: 1000px;
	}
</style>
