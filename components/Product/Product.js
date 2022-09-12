import React from 'react';

const Product = (props) => {
    const { img } = props;
    return (
        <>
            <div className="single-trand">
                <div className="img">
                    <img src={img} alt="trand" />
                </div>
                <div className="content">
                    <h3>In nec arcu vel sem porttitor elementum ac vitae enim.</h3>
                    <span>September 02 , 2022</span>
                    <div className="profile">
                        <a href="">
                            <img src="/images/user/1.png" alt="user" />
                            Morbi Tristique
                        </a>
                        <hr />

                        <a className="arrow-btn" href="#">Read more <i className="ri-arrow-right-s-line"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;