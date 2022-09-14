import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
const Articel = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [AOS]);
    return (
        <>
            <div className="single-artical" data-aos="fade-in">
                <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                <span>September 02, 2022</span>
                <Link href="/profile">
                    <div className="profile">
                        <a href="#">
                            <img src="/images/user/1.png" alt="user" />
                            Morbi Tristique
                        </a>
                    </div>
                </Link>
                <hr />
            </div>
        </>
    );
};

export default Articel;