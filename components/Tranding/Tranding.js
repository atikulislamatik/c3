import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
const Tranding = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className="tranding-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>Trending <span>Post.</span></h2>
                            <hr />
                            <div className="icon"><i className="ri-fire-fill"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/1.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <Link href="/details">
                                            <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                        </Link>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/2.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/3.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/3.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/4.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/5.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/6.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/2.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-trand" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/1.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <Link href="/details">
                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    </Link>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <Link href="/profile">
                                            <a href="#">
                                                <img src="/images/user/1.png" alt="user" />
                                                Morbi Tristique
                                            </a>
                                        </Link>
                                        <hr />

                                        <Link href="/details">
                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 text-center">
                            <a href="#" className="box-btn">Load More<i className="ri-arrow-right-s-line"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Tranding;