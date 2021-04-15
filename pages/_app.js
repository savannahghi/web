import 'styles/globals.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/* istanbul ignore next */
export function reportWebVitals(metric) {
    console.log(metric);
}

/**
 * Next.js uses this component to initialize pages.
 */

//Binding events. (for pageLoad animations)
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <div className="sghi_container">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
