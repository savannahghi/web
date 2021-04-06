import 'styles/globals.scss';

export function reportWebVitals(metric) {
    console.log(metric);
}

/**
 * Next.js uses this component to initialize pages.
 */
function MyApp({ Component, pageProps }) {
    return (
        <div className="sghi_container">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
