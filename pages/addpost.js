import Head from 'next/head';
import React from 'react';
import Addpost from '../components/Addpost/Addpost';
import Footer from '../components/Footer/Footer';
const addpost = () => {
    return (
        <>
         <Head>
                <title>AddPost - C3NTRAL</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Addpost />
            <Footer/>
        </>
    );
};

export default addpost;