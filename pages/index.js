import MainStyles from '../styles/modules/main.module.scss';
import NavBar from '../components/navbar';
import Hero from '../components/hero';
import Story from '../components/story';
import WhyNow from '../components/why_now';
import Work from '../components/work';
import OurDna from '../components/dna';
import Partners from '../components/partners';
import Footer from '../components/footer';

/**
 * This is the root component of the
 */
export default function Home() {
    return (
        <div>
            <main>
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
