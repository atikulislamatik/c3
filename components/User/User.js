import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import data from '../../data/data.json';

const User = () => {

    const [users, setUsers] = useState(data.users);

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    return (
        <>
            <div className="user-area ptb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="user-left">
                                <div className="content">
                                    <div className="icon">
                                        <i className="ri-user-star-line"></i>
                                    </div>
                                    <h2>Top <span>Users.</span></h2>
                                </div>
                                <img src="/images/shape/ushape.svg" alt="shape" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row p-m">
                                {
                                    users.map(users =>
                                        <>
                                            <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                                <Link href="/profile" >
                                                    <div className="single-user">
                                                        <div className="row align-items-center">
                                                            <div className="col-3 pe-0">
                                                                <div className="img">
                                                                    <img src={users.url} alt="user" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 ps-0">
                                                                <div className="content">
                                                                    <h3>{users.name}</h3>
                                                                    <span>{users.username}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="rank">
                                                                    <p>Rank</p>
                                                                    <span>#{users.id}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;