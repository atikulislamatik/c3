
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {

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
                                    <Swiper navigation={true} autoplay={{
                                        delay: 30000500,
                                        disableOnInteraction: false,
                                    }} modules={[Autoplay, Navigation]} className="mySwiper">
                                        <SwiperSlide className='single-swiper'>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="img">
                                                        {/* <img src="/images/banner.svg" alt="baner" /> */}
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
                                    </Swiper>
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


