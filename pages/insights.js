import { getPosts } from 'lib/posts';
import TitleBar from '../components/TitleBar';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import InsightCard from 'components/InsightsCard';
import * as StringConstants from 'components/constants/app_strings';

export async function getStaticProps(context) {
    const posts = await getPosts();

    if (!posts) {
        return {
            notFound: true
        };
    }

    return {
        props: { posts },
        revalidate: 30
    };
}

export default function Insights({ posts }) {
    const titleProps = {
        title: 'Our Insights'
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

                <div className="container">
                    {posts ? (
                        <div className="row py-3 px-5">
                            <div className="col-12 my-3">
                                <p className="page-title text-center">
                                    {StringConstants.ourText}
                                    <span className="page-title-second">
                                        {StringConstants.insightsPageTitle}
                                    </span>
                                </p>
                            </div>
                            {posts.map((post) => (
                                <InsightCard key={post.id} props={post} />
                            ))}
                        </div>
                    ) : (
                        <p>{StringConstants.errorOcccurred}</p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
