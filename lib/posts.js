import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.CMS_URL,
    key: process.env.CONTENT_API_KEY,
    version: 'v3'
});

// Retrieving Ghost content for all post
export async function getPosts() {
    return await api.posts
        .browse({
            limit: 'all'
        })
        .catch((err) => {
            console.error(err);
        });
}

// Retrieving Ghost content for a single post
export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch((err) => {
            console.error(err);
        });
}
