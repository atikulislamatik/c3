
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        autoplay: true,
    };

    const [slider, setSlider] = useState(data.slider);


    return (
        <>
            <div className="banner-area">
                <div className="container">
                    <div className="bg">
                        <div className="row">
                            <div className="col-lg-7">
                                <ul className='top-shape d-flex align-items-center justify-content-between'>
                                    <li><i className="ri-star-fill"></i></li>
                                    <li><img src="/images/shape/1.svg" alt="shape" /></li>
                                </ul>
                                <h1>Featured <span>Post.</span></h1>
                            </div>
                            <div className="col-lg-12">
                                <div className="swiper-slider-container">
                                    <Slider {...settings}>

                                        {
                                            slider.map(slider =>
                                                <>
                                                    <div className="single-swiper">
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="img">
                                                                    <Image src={slider.url} widthalt="" title="" width="750" height="400" layout="responsive" objectFit="cover" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="content">
                                                                    <h3>{slider.title}</h3>
                                                                    <span>{slider.date}</span>
                                                                    <div className="profile">

                                                                        <Link href="/profile">
                                                                            <a href="">
                                                                                <Image src={slider.userImg} width="40" height="40" />
                                                                                <span>{slider.user}</span>
                                                                            </a>
                                                                        </Link>
                                                                        <hr />

                                                                        <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>)
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shapebg"></div>
            </div>
        </>
    );
};

export default Banner;

