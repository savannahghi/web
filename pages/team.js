import TitleBar from '../components/TitleBar';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import TeamCard from 'components/TeamCard';
import * as StringConstants from 'components/constants/app_strings';

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

                        {teamData.map((member) => (
                            <TeamCard key={member.id} props={member} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const teamData = [
    {
        id: 0,
        name: 'Dr. Riro Matiko',
        title: 'SGHI President',
        headshot: '/images/matiko.svg'
    },
    {
        id: 1,
        name: 'Dr. John Muthee',
        title: 'CEO, Savannah Informatics',
        headshot: '/images/john_muthee.svg'
    },
    {
        id: 2,
        name: 'Eric Mbuthia',
        title: 'SGHI Team',
        headshot: '/images/eric_mbuthia.svg'
    },
    {
        id: 3,
        name: 'Dr. Ngure Nyaga',
        title: 'SGHI Team',
        headshot: '/images/team_member.jpg'
    },
    {
        id: 4,
        name: 'John Paul Ogalo',
        title: 'SGHI Team',
        headshot: '/images/jp_ogalo.svg'
    }
];
