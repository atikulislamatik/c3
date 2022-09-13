import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';

const Post = () => {
    const [product, setProduct] = useState(data.product);

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
                        {
                            product.map(product =>
                                <>
                                    <div className="col-lg-3 col-md-6" >

                                        <div className="single-post" data-aos="fade-in" >
                                            <div className="img">
                                                <Image src={product.url} widthalt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                            </div>
                                            <div className="content">
                                                <Link href="/details">
                                                    <h3>{product.title}</h3>
                                                </Link>
                                                <span>{product.date}</span>
                                                <div className="profile">
                                                    <Link href="/profile">
                                                        <a href="#" className='pro-img'>
                                                            <Image src={product.userImg} width="40" height="40" />
                                                            <span>{product.user}</span>
                                                        </a>
                                                    </Link>
                                                    <hr />

                                                    <div className="row align-items-center">
                                                        <div className="col-6">
                                                            <Link href="/details">
                                                                <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                                                            </Link>
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
                                </>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Post;