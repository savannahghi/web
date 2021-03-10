import '../styles/globals.scss';
import TitleBar from '../components/head';

/**
 * Next.js uses this component to initialize pages.
 */
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="navbar">
                <TitleBar />
            </div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
