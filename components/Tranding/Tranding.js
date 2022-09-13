import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
const Tranding = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const [product, setProduct] = useState(data.product);

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
                        {
                            product.map(product =>
                                <>
                                    <div className="col-lg-3 col-md-6" >

                                        <div className="single-trand" data-aos="fade-in" >
                                            <div className="img">
                                                <Image src={product.url} widthalt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
                                            </div>
                                            <div className="content">
                                                <Link href="/details">
                                                    <h3>{product.title}</h3>
                                                </Link>
                                                <span>{product.date}</span>
                                                <div className="profile">
                                                    <Link href="/profile">
                                                        <a href="#">
                                                            <Image src={product.userImg} width="40" height="40" />
                                                            <span>{product.user}</span>
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
                                </>)
                        }

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