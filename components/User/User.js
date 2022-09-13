import AOS from 'aos';
import React, { useEffect } from 'react';
import Link from 'next/link';
const User = () => {
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
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/1.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/2.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/1.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/2.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/1.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/2.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/1.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/2.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/1.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                    <Link href="/profile" >
                                        <div className="single-user">
                                            <div className="row align-items-center">
                                                <div className="col-3 pe-0">
                                                    <div className="img">
                                                        <img src="/images/user/2.png" alt="user" />
                                                    </div>
                                                </div>
                                                <div className="col-6 ps-0">
                                                    <div className="content">
                                                        <h3>Morbi Tristique</h3>
                                                        <span>@morbitristique</span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rank">
                                                        <p>Rank</p>
                                                        <span>#2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;