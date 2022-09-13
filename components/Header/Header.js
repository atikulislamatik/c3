import Link from 'next/link';
import React from 'react';

const Header = () => {

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
                                <li>
                                    <Link href="/register">
                                        <a className='border-btn me-3' href="#">Register <i className="ri-arrow-right-s-line"></i></a>
                                    </Link>
                                </li>
                                <li><a className='box-btn' href="#"><i className="ri-wallet-fill"></i>Connect Wallet</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;