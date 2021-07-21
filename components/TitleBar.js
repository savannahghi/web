import Head from 'next/head';
import * as StringConstants from '../components/constants/app_strings';

export default function TitleBar({ props }) {
    return ( <
        Head >
        <
        title > { StringConstants.title } { props.title } <
        /title> <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1.0"
        key = "viewport" / >
        <
        meta name = "description"
        content = "We are on a mission, Access to quality affordable care remains out of reach for millions of Africans" /
        >

        <
        meta property = "og:type"
        content = "website" / >
        <
        meta property = "og:title"
        content = "Savannah Global Health Institute" / >
        <
        meta name = "og:description"
        property = "og:description"
        content = "" / >
        <
        meta property = "og:image"
        content = "/images/SGHI_logo.svg" / >
        <
        meta property = "og:site_name"
        content = "Savannah Global Health Institute" / >
        <
        meta property = "og:url"
        content = "" / >
        <
        meta property = "og:locale"
        content = "en_GB" / >

        <
        meta name = "twitter:card"
        content = "1.2 BN Africans lack access to quality healthcare. We are making a difference." /
        >
        <
        meta name = "twitter:title"
        content = "Savannah Global Health Institute" / >
        <
        meta name = "twitter:description"
        content = "1.2 BN Africans lack access to quality healthcare. We are making a difference." /
        >
        <
        meta name = "twitter:site"
        content = "" / >
        <
        meta name = "twitter:creator"
        content = "" / >
        <
        meta name = "twitter:image"
        content = "" / >
        <
        link rel = "canonical"
        href = "" / >
        <
        link rel = "apple-touch-icon"
        href = "/images/favicon.ico" / >
        <
        link rel = "icon"
        href = "/favicons/favicon.ico" / >
        <
        link href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        rel = "stylesheet"
        async /
        >
        <
        link href = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
        rel = "stylesheet" /
        >

        <
        link href = "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
        rel = "stylesheet"
        defer /
        >

        <
        script src = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js" > < /script> <
        script defer src = "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js" > < /script> <
        /Head>
    );
}