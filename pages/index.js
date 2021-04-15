import TitleBar from '../components/TitleBar';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import StoryGrid from '../components/StoryGrid';
import Mission from '../components/Mission';
import Work from '../components/Work';
import OurDna from '../components/Dna';
import PartnersGrid from '../components/PartnersGrid';
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
        image: AssetConstants.storyThumb,
        image_alt: 'Our Story',
        name: StringConstants.sghiPresidentName,
        position: StringConstants.sghiPresident,
        title_one: StringConstants.ourText,
        title_two: StringConstants.storyText,
        content: StringConstants.storyContents
    };

    const whyNowProps = {
        image: AssetConstants.whyNowVideoThumbnail,
        image_alt: 'Why Now',
        name: StringConstants.silCEOName,
        position: StringConstants.silCEOTitle,
        title_one: StringConstants.whyText,
        title_two: StringConstants.nowText,
        content: StringConstants.whyNowContent
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

                <Hero />

                <div className="container">
                    <StoryGrid props={storyProps} />

                    <Mission />

                    <StoryGrid props={whyNowProps} />

                    <Work />

                    <OurDna />

                    <PartnersGrid />
                </div>
            </main>

            <Footer />
        </div>
    );
}
