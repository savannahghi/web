import TitleBar from '../components/TitleBar';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Mission from '../components/Mission';
import Work from '../components/Work';
import OurDna from '../components/Dna';
import Partners from '../components/Partners';
import MainStyles from '../styles/modules/Main.module.scss';
import * as StringConstants from '../components/constants/app_strings';
import * as AssetConstants from '../components/constants/app_assets';

/**
 * This is the root component of the
 */
export default function Home() {
    const titleProps = {
        title: 'Home'
    };

    const storyProps = {
        video: AssetConstants.videoThumbnail,
        name: StringConstants.sghiPresidentName,
        position: StringConstants.sghiPresident,
        first_title: StringConstants.ourText,
        second_title: StringConstants.storyText,
        subtitle: StringConstants.storyContents
    };

    const whyNowProps = {
        video: AssetConstants.videoThumbnail,
        name: StringConstants.silCEOName,
        position: StringConstants.silCEOTitle,
        first_title: StringConstants.whyText,
        second_title: StringConstants.nowText,
        subtitle: StringConstants.whyNowContent
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

                <Hero />

                <div className={MainStyles.main}>
                    <Story props={storyProps} />

                    <Mission />

                    <Story props={whyNowProps} />

                    <Work />

                    <OurDna />

                    <Partners />
                </div>
            </main>

            <Footer />
        </div>
    );
}
