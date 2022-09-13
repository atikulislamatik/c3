import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
const Post = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            <div className="post-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>Your <span>Post.</span></h2>
                            <hr />
                            <div className="post-btn">
                                <Link href="/addpost">
                                    <a href="#" className="box-btn"><i className="ri-pencil-line"></i> <span>Create post</span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/1.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/2.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/3.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/3.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/4.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/5.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/6.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/2.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-post" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/trand/1.svg" alt="trand" />
                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02 , 2022</span>
                                    <div className="profile">
                                        <a href="">
                                            <img src="/images/user/1.png" alt="user" />
                                            Morbi Tristique
                                        </a>
                                        <hr />

                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                            </div>
                                            <div className="col-6">
                                                <div className="btns d-flex align-itesm-center">
                                                    <a href="#" className="edit me-2"><i className="ri-edit-2-line"></i></a>
                                                    <a href="#" className="dlt"><i className="ri-delete-bin-6-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Post;