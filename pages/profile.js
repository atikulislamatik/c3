import React from 'react';
import Footer from '../components/Footer/Footer';
import HeaderTwo from '../components/Header/HeaderTwo';
import Post from '../components/Profile/Post';
import Profile from '../components/Profile/Profile';

const profile = () => {
    return (
        <div>
            <HeaderTwo/>
            <Profile/>
            <Post/>
            <Footer/>
        </div>
    );
};

export default profile;