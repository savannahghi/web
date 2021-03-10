import Head from 'next/head';

export default function TitleBar() {
    return (
        <Head>
            <title>Savannah Global Health Institute | Home</title>
            <meta
                name="description"
                content="We are on a mission, Access to quality affordable care remains out of reach for millions of Africans"
            />
            <link rel="icon" href="/favicons/favicon.ico" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
                rel="stylesheet"
            />
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
        </Head>
    );
}
