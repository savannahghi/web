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
        </Head>
    );
}
