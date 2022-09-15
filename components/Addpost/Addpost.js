
import Editor from '../Editor';

import React from 'react';
import Uploads from './Upload';

const Addpost = ({ placeholder }) => {


    return (
        <>
            <div className="add-area ptb-70">
                <div className="container">
                    <div className="row">
                        <a className='back' href="#"><i className="ri-arrow-left-s-line"></i> Back to previous page</a>

                        <div className="row align-items-center">
                            <div className="col-lg-10">
                                <div className="content-top">
                                    <h2>Create New Post.</h2>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="shape">
                                    <img src="/images/shape/addtbg.svg" alt="bg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" className="add-form">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Post title</label>
                                        <input type="text" className="form-control mb-3" placeholder="Input your post title" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Labels</label>
                                        <input type="text" className="form-control mb-3" placeholder="Add your labels" />
                                        <a href="#"> <i className="ri-add-line"></i></a>

                                    </div>
                                    <ul className="hash d-flex">
                                        <li><a href="#"><span>CRYPTO</span></a></li>
                                        <li><a href="#"><span>NFT</span></a></li>
                                        <li><a href="#"><span>EVENT</span></a></li>
                                        <li><a href="#"><span>NEWS</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Labels</label>
                                        <input type="text" className="form-control mb-3" placeholder="Add your keywords" />
                                        <a href="#"> <i className="ri-add-line"></i></a>

                                    </div>
                                    <ul className='d-flex align-items-center key'>
                                        <li><a href="#"><span>DONEC</span></a></li>
                                        <li><a href="#"><span>QUIS</span></a></li>
                                        <li><a href="#"><span>ARCU</span></a></li>
                                        <li><a href="#"><span>VELIT</span></a></li>
                                        <li><a href="#"><span>PRETIUM</span></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <label className="main add-form" >Main banner</label>
                            <Uploads />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4">
                            <label >Content</label>
                            <div className="rich">
                                <Editor />
                                <ul className='btn-rich d-flex align-items-center'>
                                    <li>
                                        <a className="cancel" href="#">CANCEL</a>
                                    </li>
                                    <li>
                                        <a className='post' href="#"><i class="ri-shield-check-fill"></i>POST</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addpost;