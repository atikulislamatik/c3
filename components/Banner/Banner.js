
import React from 'react';
import Slider from "react-slick";
// import { Autoplay, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Link from 'next/link';
// import "./slick.css";
// import styles from "./slick.module.css";
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
                                        <div className="single-swiper">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="img">
                                                        <Image src="/images/banner.svg" widthalt="" title="" width="750" height="400" layout="responsive" objectFit="cover" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="content">
                                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                                        <span>September 02 , 2022</span>
                                                        <div className="profile">

                                                            <Link href="/profile">
                                                                <a href="">
                                                                    <img src="/images/user/1.png" alt="user" />
                                                                    Morbi Tristique
                                                                </a>
                                                            </Link>
                                                            <hr />

                                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-swiper">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="img">
                                                        <Image src="/images/banner1.jpg" widthalt="" title="" width="750" height="400" layout="responsive" objectFit="cover" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="content">
                                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>

                                                        <span>September 02 , 2022</span>
                                                        <div className="profile">

                                                            <Link href="/profile">
                                                                <a href="">
                                                                    <img src="/images/user/1.png" alt="user" />
                                                                    Morbi Tristique
                                                                </a>
                                                            </Link>
                                                            <hr />

                                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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


{/* <Swiper navigation={true} autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }} modules={[Autoplay, Navigation]} className="mySwiper">
                                        <SwiperSlide className='single-swiper'>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="img">
                                                        <Image src="/images/banner.svg" widthalt="" title="" width="735" height="400" layout="responsive" objectFit="cover" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="content">
                                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                                        <span>September 02 , 2022</span>
                                                        <div className="profile">

                                                            <Link href="/profile">
                                                                <a href="">
                                                                    <img src="/images/user/1.png" alt="user" />
                                                                    Morbi Tristique
                                                                </a>
                                                            </Link>
                                                            <hr />

                                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className='single-swiper'>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="img">
                                                        <Image src="/images/banner1.jpg" widthalt="" title="" width="735" height="400" layout="responsive" objectFit="cover" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="content">
                                                        <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>

                                                        <span>September 02 , 2022</span>
                                                        <div className="profile">

                                                            <Link href="/profile">
                                                                <a href="">
                                                                    <img src="/images/user/1.png" alt="user" />
                                                                    Morbi Tristique
                                                                </a>
                                                            </Link>
                                                            <hr />

                                                            <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper> */}
