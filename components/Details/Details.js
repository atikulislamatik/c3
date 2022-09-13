import Link from 'next/link';
import React from 'react';
import Articel from '../Article/Articel';
import Image from 'next/image';
const Details = () => {
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
                                    <Image src="/images/details.svg" widthalt="" title="details" width="100%" height="100%" layout="responsive" objectFit="cover"/>

                                </div>
                                <div className="content">
                                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                                    <span>September 02, 2022</span>
                                    <div className="row align-items-center mt-2">
                                        <div className="col-lg-5 col-md-5">
                                            <div className="profile">
                                                <Link href="/profile">
                                                    <a href="#">
                                                        <img src="/images/user/1.png" alt="user" />
                                                        Morbi Tristique
                                                    </a>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-lg-7 col-md-7">
                                            <ul className="hash d-flex">
                                                <li><span>CRYPTO</span></li>
                                                <li><span>NFT</span></li>
                                                <li><span>EVENT</span></li>
                                                <li><span>NEWS</span></li>
                                            </ul>
                                        </div>
                                        <div className="desc mt-3">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores? Dolorem, molestiae! Voluptas non nemo adipisci ut explicabo, voluptatem omnis accusamus, harum corporis fugit impedit voluptate ipsa ab dolor hic!
                                            </p>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sed voluptatibus temporibus debitis, exercitationem consequuntur tempora aliquam aspernatur molestiae nisi reiciendis tempore esse a! Eos magnam maiores corrupti saepe atque.lorem
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sed voluptatibus temporibus debitis, exercitationem consequuntur tempora aliquam aspernatur molestiae nisi reiciendis tempore esse a! Eos magnam maiores corrupti saepe atque.lorem
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sed voluptatibus temporibus debitis, exercitationem consequuntur tempora aliquam aspernatur molestiae nisi reiciendis tempore esse a! Eos magnam maiores corrupti saepe atque.lorem
                                            </p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi ipsum ex saepe ut! Molestiae possimus quam numquam repellendus ipsum unde id nisi odit quia, pariatur magnam vitae recusandae consectetur?</p>


                                            <ul className='d-flex align-items-center key'>
                                                <li><h3>Keywords:</h3></li>
                                                <li><span>DONEC</span></li>
                                                <li><span>QUIS</span></li>
                                                <li><span>ARCU</span></li>
                                                <li><span>VELIT</span></li>
                                                <li><span>PRETIUM</span></li>
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
                                <Articel />
                                <Articel />
                                <Articel />
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