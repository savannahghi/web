import Head from 'next/head';

export default function TitleBar({ props }) {
    return (
        <Head>
            <title>Savannah Global Health Institute | {props.title}</title>
            <meta
                name="description"
                content="We are on a mission, Access to quality affordable care remains out of reach for millions of Africans"
            />
            {/* change content type to article dynamically when on insights page */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Savannah Global Health Institute" />
            <meta name="og:description" property="og:description" content="" />
            <meta property="og:image" content="/images/sghi_logo.svg" />
            <meta property="og:site_name" content="Savannah Global Health Institute" />
            <meta property="og:url" content="" />
            <meta property="og:locale" content="en_GB" />

            <meta
                name="twitter:card"
                content="We are on a mission, Access to quality affordable care remains out of reach for millions of Africans"
            />
            <meta name="twitter:title" content="Savannah Global Health Institute" />
            <meta
                name="twitter:description"
                content="We are on a mission, Access to quality affordable care remains out of reach for millions of Africans"
            />
            <meta name="twitter:site" content="" />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:image" content="" />
            <link rel="canonical" href="" />
            <link rel="apple-touch-icon" href="/images/favicon.ico" />
            <link rel="icon" href="/favicons/favicon.ico" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
                async
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
                rel="stylesheet"
                async
            />
            <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
            <script async src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
            <link
                href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
                rel="stylesheet"
                async
            />
        </Head>
    );
}
