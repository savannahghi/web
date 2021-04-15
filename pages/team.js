import TitleBar from '../components/TitleBar';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import * as StringConstants from '../components/constants/app_strings';
import TeamData from '../lib/team.json';
import TeamStyles from '../styles/modules/Team.module.scss';

/**
 * This component is the Teams page
 */
export default function Team() {
    const titleProps = {
        title: 'Our Team'
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

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

                        {TeamData.map((member) =>
                            member.fellow ? null : <TeamCard key={member.id} props={member} />
                        )}
                    </div>

                    <div className="row py-5 px-5">
                        <div className="col-12 my-3">
                            <p className="page-title text-center">
                                <span className="page-title-second">Fellows</span> & Advisors
                            </p>
                        </div>

                        {TeamData.map((member) =>
                            member.fellow ? <TeamCard key={member.id} props={member} /> : null
                        )}
                    </div>
                </div>

                <div className="container-fluid bg-light text-center pt-3 pb-5">
                    <div className={TeamStyles.join_us_title}>Interested in joining the team?</div>
                    <div className={TeamStyles.join_sub}>
                        <div className={TeamStyles.join_us_subtitle}>
                            One of our most important core values is to partner with our employees
                            because we know they are instrumental in the success of the company.
                        </div>
                    </div>
                    <div className="btn btn-secondary btn-rounded text-capitalize px-5 font-weight-bold">
                        See Job Openings
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
