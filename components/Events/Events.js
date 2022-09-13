import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Image from 'next/image';
const Events = () => {
    const [events, setEvents] = useState(data.events);

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

                        {
                            events.map(events =>
                                <>
                                    <div className="col-lg-6 col-md-6" data-aos="fade-in">
                                        <div className="single-event">
                                            <div className="row align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="img">
                                                        <Image src={events.url} widthalt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="content">
                                                        <div className="date">
                                                            <h6>05 <span>SEP, MON</span></h6>
                                                            {/* <h6>{events.date}</h6> */}
                                                        </div>
                                                        <h3>{events.title} </h3>
                                                        <p>{events.dsc}</p>
                                                        <a href="#" className="line-btn">Read More <i className="ri-arrow-right-s-line"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;