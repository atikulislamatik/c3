import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';

const Writers = () => {

    const [writers, setWriters] = useState(data.writers);


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
                        {
                            writers.map(writers =>
                                <>
                                    <div className="col-lg-4">
                                        <div className="single-item" data-aos="fade-in">
                                            <div className="img">
                                                <img src={writers.userImg} alt="user" />
                                            
                                                <div className="badge">
                                                    <div>{writers.uid}</div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3>{writers.name}</h3>
                                                <span>@{writers.user}</span>
                                            </div>
                                            <a href="#" className="box-btn black">Read More <i className="ri-arrow-right-s-line"></i></a>
                                        </div>
                                    </div>
                                </>)
                        }
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