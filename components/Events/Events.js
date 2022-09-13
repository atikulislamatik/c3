import AOS from 'aos';
import React, { useEffect } from 'react';

const Events = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            <div className="events-area ptb-70">
                <div className="container">
                    <div className="row ">
                        <div className="title">
                            <h2>Upcoming <span>Event.</span></h2>
                            <hr />
                            <div className="icon"><i className="ri-calendar-todo-fill"></i></div>
                        </div>

                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/1.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>05 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/2.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>25 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/1.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>05 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/2.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>25 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/1.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>05 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="fade-in">
                            <div className="single-event">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="img">
                                            <img src="/images/events/2.svg" alt="events" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <div className="date">
                                                <h6>25 <span>SEP, MON</span></h6>
                                            </div>
                                            <h3>Donec vulputate laoreet lacus.Venenatis metus rhoncus accumsan lobortis. </h3>
                                            <p>Your description event in here</p>
                                            <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;