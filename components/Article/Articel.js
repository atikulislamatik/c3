import Link from 'next/link';
import React from 'react';

const Articel = () => {
    return (
        <>
            <div className="single-artical">
                <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                <span>September 02, 2022</span>
                <Link href="/profile">
                    <div className="profile">
                        <a href="#">
                            <img src="/images/user/1.png" alt="user" />
                            Morbi Tristique
                        </a>
                    </div>
                </Link>
                <hr />
            </div>
        </>
    );
};

export default Articel;