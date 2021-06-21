<script context="module">
	// this is the blog posts inded page whcih lists out all of the posts

	export const prerender = true;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page: _page, fetch }) {
		// get all the pages in the `posts` folder
		const { pages } = await import('../config/pages');
		const posts = [];
		// generate content for each post
		for await (let post of pages) {
			const parsed = await post.component();
			posts.push({
				slug: post.slug,
				...parsed
			});
		}
		// when building, only use published posts
		if (import.meta.env.PROD) {
			return {
				props: {
					posts: posts.filter(({ metadata }) => metadata.published)
				}
			};
		} else {
			return {
				props: {
					posts
				}
			};
		}
	}
</script>

<script>
	export let posts = [];
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<div class="blog-index-wrapper">
	<h1>Posts</h1>
	<ul>
		{#each posts as post, index (index)}
			<li>
				<a href={post.slug} sveltekit:prefetch>{post.metadata.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.blog-index-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
