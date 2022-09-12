import React from 'react';
import Link from 'next/link';

const HeaderTwo = () => {
    return (
        <>
          <nav className="navbar-area navbar navbar-expand-lg pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-3">
                            <Link href="/">
                                <a href="#">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-10 col-9">
                            <ul className='d-flex align-items-center justify-content-end'>
                                <li><a className='border-btn twitter  me-3' href="#"><i className="ri-twitter-fill"></i> Connect twitter </a></li>
                                <li><a className='box-btn ' href="#"><i className="ri-gps-line"></i>X98798...3455</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>   
        </>
    );
};

export default HeaderTwo;