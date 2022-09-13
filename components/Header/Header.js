import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isReg, setReg] = useState(false);
    const [isWallet, setWallet] = useState(false);

    const CheckRegister = () => {
        setReg(true)
    }

    const CheckWallet = () => {
        setWallet(true)
    }
    return (
        <>
            <nav className="navbar-area navbar navbar-expand-lg pt-4 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-5">
                            <Link href="/">
                                <a href="#">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-10 col-7">
                            <ul className='d-flex align-items-center justify-content-end'>
                                {
                                    isReg ?
                                        <li><a className='border-btn twitter d-none-sm  me-3' href="#"><i className="ri-twitter-fill"></i> Connect twitter </a></li>

                                        : <li>
                                            <Link href="/register">
                                                <a className='border-btn me-3' onClick={CheckRegister} href="#">Register <i className="ri-arrow-right-s-line"></i></a>
                                            </Link>
                                        </li>
                                }

                                {
                                    isWallet ?
                                        <li><a className='box-btn ' href="#"><i className="ri-gps-line"></i><span>X98798...3455</span></a></li>
                                        :
                                        <li><a onClick={CheckWallet} className='box-btn' href="#"><i className="ri-wallet-fill"></i><span>Connect Wallet</span></a></li>

                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;