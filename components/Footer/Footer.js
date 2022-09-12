import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className='footer-area ptb-70'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="single-footer">
                                <p>  &#169;C3NTRAL 2022</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-footer text-center">
                                <p>ALL RIGHT RESERVED</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-footer">
                                <ul className='d-flex align-items-center justify-content-end social'>
                                    <li>
                                        <a href="#" target='_blank'><i className="ri-discord-fill"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'><i className="ri-twitter-fill"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'><i className="ri-youtube-fill"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="powered-by ">
                        <p className='text-center'>POWERED BY</p>
                        <div className="powered d-flex align-items-center">
                            <img src="/images/footer/1.png" alt="footer" />
                            <img className="mid" src="/images/footer/2.png" alt="footer" />
                            <img src="/images/footer/3.png" alt="footer" />
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;