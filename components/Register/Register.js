import React from 'react';

const Register = () => {
    return (
        <>
            <div className="reg-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className='back' href="#"><i className="ri-arrow-left-s-line"></i> Back to previous page</a>
                        </div>
                    </div>
                    <div className="bg ptb-70">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-4">
                                <div className="reg-content">
                                    <div className="logo">
                                        <img src="/images/rlogo.svg" alt="logo" />
                                    </div>
                                    <form action="#">
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="form-group">
                                                <select className="form-select form-control mb-4" aria-label="Default select example">
                                                    <option selected>Select your wallet</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-4" placeholder="Set your username" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="form-group twitter-con">
                                                <input type="text" className="form-control mb-4" placeholder="Twitter username" />
                                                <i className="ri-twitter-fill"></i>
                                                <a href="#" className="box-btn"><i className="ri-refresh-line"></i> Reconnect</a>
                                            </div>

                                        </div>
                                        <button className="up-btn w-100"><i className="ri-shield-check-fill"></i> Connect wallet & Register</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="shape">
                            <img src="/images/shape/rshape.svg" alt="shape" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;