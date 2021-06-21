// pull in pages content
// https://vitejs.dev/guide/features.html#glob-import

// get all the blog posts from their folder
const files = import.meta.glob('../../../posts/*.svx');

// create an absolute path to the post and return that as a slug and the actual page
export const pages = Object.entries(files).map(([path, page]) => {
    return {
        component: page,
        slug: path.replace('../../../posts', '/posts').replace(/\.(svx)$/, '')
    };
});

// get the given page according to the url passed in. This will be a slug
export async function get(url) {
    const page = pages.find(({ slug }) => slug === url);
    let component, metadata, slug;

    // if the passed in slug matches the known pages in the file system then return the
    // create the properties to return
    if (page) {
        slug = page.slug;
        const parsed = await page.component();
        component = parsed.default;
        metadata = parsed.metadata;
    }
    return {
        slug,
        component,
        metadata
    };
}
