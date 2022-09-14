import React from 'react';
import Register from '../components/Register/Register';
import Head from 'next/head';
const register = () => {
    return (
        <>
            <Head>
                <title>Register - C3NTRAL</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Register />
        </>
    );
};

export default register;