<script context="module">
	// the blog posts layout

	// the following components are now available in every .svx file and map to common markdown elements such as h1-h6 and p.
	import H1 from 'lib/components/H1.svelte';
	export { H1 as h1 };
</script>

<div class="post-page">
	<slot />
</div>

<style>
	.post-page {
		display: flex;
		flex-direction: column;
	}
</style>
