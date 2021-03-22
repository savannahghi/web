import NavBar from '../components/navbar';
import Footer from '../components/footer';
import TeamCard from '../components/teamCard';
import * as StringConstants from '../components/constants/app_strings';

/**
 * This component is the Teams page
 */
export default function Team() {
    return (
        <div>
            <main className="sghi_container">
                <NavBar />

                <div className="container">
                    <div className="row py-5 px-5">
                        <div className="col-12 my-3">
                            <p className="page-title text-center">
                                {StringConstants.ourText}
                                <span className="page-title-second">
                                    {StringConstants.teamPageTitle}
                                </span>
                            </p>
                            <p className="text-center team-subtitle">
                                {StringConstants.teamContent}
                            </p>
                        </div>

                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
