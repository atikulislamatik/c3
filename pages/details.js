import Head from 'next/head';
import React from 'react';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';
const details = () => {
    return (
        <>
            <Head>
                <title>Details - C3NTRAL</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Details />
            <Footer />
        </>
    );
};

export default details;