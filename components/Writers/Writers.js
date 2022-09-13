import AOS from 'aos';
import React, { useEffect } from 'react';
const Writers = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            <div className="writers-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>Trending <span>Writers.</span></h2>
                            <hr />
                            <div className="icon"><i className="ri-user-star-fill"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-item" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/user/1.svg" alt="user" />
                                    <div className="badge">
                                        <div>1</div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Morbi Tristique</h3>
                                    <span>@morbitristique</span>
                                </div>
                                <a href="#" className="box-btn black">Read More <i className="ri-arrow-right-s-line"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-item" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/user/2.svg" alt="user" />
                                    <div className="badge">
                                        <div>2</div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Kuthindieng</h3>
                                    <span>@kuthindieng</span>
                                </div>
                                <a href="#" className="box-btn black">Read More <i className="ri-arrow-right-s-line"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-item lc" data-aos="fade-in">
                                <div className="img">
                                    <img src="/images/user/3.svg" alt="user" />
                                    <div className="badge">
                                        <div>3</div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Vactery</h3>
                                    <span>@vactery</span>
                                </div>
                                <a href="#" className="box-btn black">Read More <i className="ri-arrow-right-s-line"></i></a>
                            </div>
                        </div>
                        <div className="shape" data-aos="fade-in">
                            <img src="/images/shape/black.svg" alt="shape" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Writers;