import TitleBar from '../components/titleBar';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Story from '../components/story';
import WhyNow from '../components/why_now';
import Work from '../components/work';
import OurDna from '../components/dna';
import Partners from '../components/partners';
import MainStyles from '../styles/modules/main.module.scss';

/**
 * This is the root component of the
 */
export default function Home() {
    const props = {
        title: 'Home'
    };

    return (
        <div>
            <TitleBar props={props} />

            <main className="sghi_container">
                <NavBar />

                <Hero />

                <div className={MainStyles.main}>
                    <Story />

                    <WhyNow />

                    <Work />

                    <OurDna />

                    <Partners />
                </div>
            </main>

            <Footer />
        </div>
    );
}
