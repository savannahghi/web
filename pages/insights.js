import { getPosts } from 'lib/posts';
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import InsightCard from 'components/insightsCard';
import Pagination from 'components/pagination';
import * as StringConstants from 'components/constants/app_strings';

// eslint-disable-next-line no-unused-vars
export async function getStaticProps(context) {
    const posts = await getPosts();

    if (!posts) {
        return {
            notFound: true
        };
    }

    return {
        props: { posts }
    };
}

export default function Insights({ posts }) {
    return (
        <div>
            <main className="sghi_container">
                <NavBar />

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
                            <Pagination /> {/* todo: make dynamic */}
                        </div>
                    ) : (
                        <p>An Error Occured, Try again</p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
