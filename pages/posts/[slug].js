import { getSinglePost, getPosts } from '../../lib/posts';
import TitleBar from '../../components/TitleBar';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import PostStyles from 'styles/modules/Posts.module.scss';

// PostPage page component
export default function PostPage(props) {
    const titleProps = {
        title: 'post'
    };

    return (
        <main className="sghi-container">
            <TitleBar props={titleProps} />

            <NavBar props={titleProps} />

            <div className="container pb-5">
                {props ? (
                    <div className={PostStyles.posts}>
                        <h1 className="py-5">{props.post.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
                    </div>
                ) : (
                    <p>An Error Occured, Please try again</p>
                )}
            </div>

            <Footer />
        </main>
    );
}

export async function getStaticPaths() {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.slug }
    }));

    // { fallback: false } means posts not found should 404.
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const post = await getSinglePost(context.params.slug);

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        props: { post },
        revalidate: 30
    };
}
