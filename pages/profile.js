import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Post from '../components/Profile/Post';
import Profile from '../components/Profile/Profile';
const profile = () => {
    return (
        <div>
             <Head>
                <title>Profile - C3NTRAL</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Profile/>
            <Post/>
            <Footer/>
        </div>
    );
};

export default profile;