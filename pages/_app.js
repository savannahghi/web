import dynamic from 'next/dynamic';
import TitleBar from 'components/titleBar';
import 'styles/globals.scss';

const Scroll = dynamic(
    () => {
        return import('components/scroll');
    },
    { ssr: false }
);

/**
 * Next.js uses this component to initialize pages.
 */
function MyApp({ Component, pageProps }) {
    const title = 'Home';
    return (
        <div className="sghi_container">
            <TitleBar props={title} />

            <Scroll />

            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
