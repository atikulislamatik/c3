import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';

const Articel = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [AOS]);

    const [artical, setArtical] = useState(data.artical);


    return (
        <>
            {
                artical.map(artical =>
                    <>  <div className="single-artical" data-aos="fade-in">
                        <h3>{artical.title}</h3>
                        <span>{artical.date}</span>
                        <Link href="/profile">
                            <div className="profile">
                                <a href="#">
                                    <img src={artical.userImg} alt="user" />
                                    {artical.name}
                                </a>
                            </div>
                        </Link>
                        <hr />
                    </div></>
                )
            }
        </>
    );
};

export default Articel;