import NavBar from '../components/navbar';
import Footer from '../components/footer';
import InsightCard from '../components/insightsCard';
import Pagination from '../components/pagination';
import * as StringConstants from '../components/constants/app_strings';

/**
 * This component is the insights page
 */
export default function Home() {
    return (
        <div>
            <main className="sghi_container">
                <NavBar />

                <div className="container insights-container">
                    <div className="row py-5 px-5">
                        <div className="col-12 my-3">
                            <p className="page-title text-center">
                                {StringConstants.ourText}
                                <span className="page-title-second">
                                    {StringConstants.insightsPageTitle}
                                </span>
                            </p>
                        </div>
                        <InsightCard />
                        <InsightCard />
                        <InsightCard />
                        <InsightCard />
                        <Pagination />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
