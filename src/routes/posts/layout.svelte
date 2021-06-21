<script context="module">
	// the blog posts layout

	// the following components are now available in every .svx file and map to common markdown elements such as h1-h6 and p.
	import H1 from '$lib/components/H1.svelte';
	export { H1 as h1 };
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
		margin: 1rem;
		display: flex;
		flex-direction: column;
		font-family: 'Noto Sans';

		h1 {
			font-weight: 400;
		}
	}
</style>
