import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import detailsImg from '../../public/images/details.svg';
import userImg from '../../public/images/user/1.svg';
import Articel from '../Article/Articel';
const Details = () => {


    const details = {
        title: "In nec arcu vel sem porttitor elementum ac vitae enim.",
        date: "September 02, 202200",
        user: " Morbi Tristique",
        hash: ['CRYPTO', 'NFT', 'EVENT', 'NEWS'],
        url: detailsImg,
        userUrl: userImg,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!',
        keywords: ['DONEC', 'QUIS', 'ARCU', 'VELIT', 'PRETIUM'],

    };

    return (
        <>
            <div className="details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="details-content">
                                <Link href="/">
                                    <a className='back' href="#"><i className="ri-arrow-left-s-line"></i> Back to previous page</a>
                                </Link>
                                <div className="img">
                                    <Image src={detailsImg} widthalt="" title="details" width="100%" height="100%" layout="responsive" objectFit="cover" />

                                </div>
                                <div className="content">
                                    <h3>{details.title}</h3>
                                    <span>{details.date}</span>
                                    <div className="row align-items-center mt-2">
                                        <div className="col-lg-5 col-md-5">
                                            <div className="profile">
                                                <Link href="/profile">
                                                    <a href="#" className='d-flex align-items-center'>
                                                        <Image src={userImg} width="40" height="40" />

                                                        <span className='ms-2'>{details.user}</span>
                                                    </a>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-lg-7 col-md-7">
                                            <ul className="hash d-flex">

                                                {details.hash.map((hash, index) =>

                                                    <li key={index}>
                                                        <span>{hash}</span>
                                                    </li>
                                                )
                                                }
                                            </ul>
                                        </div>
                                        <div className="desc mt-3">
                                            <p>{details.desc}</p>
                                            <p>{details.desc}</p>

                                            <ul className='d-flex align-items-center key'>
                                                <li><h3>Keywords:</h3></li>
                                                {details.keywords.map((keywords, index) =>

                                                    <li key={index}>
                                                        <span>{keywords}</span>
                                                    </li>
                                                )
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="shape text-end">
                                <img src="/images/shape/addtbg.svg" alt="shape" />
                            </div>
                            <div className="articel">
                                <h3>Latest <span>Article</span></h3>
                                <Articel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;