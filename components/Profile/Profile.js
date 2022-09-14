import {
    CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement
} from 'chart.js';

import { Modal } from 'antd';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);
const data = {
    labels: ["Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27", "Aug 28"],
    datasets: [
        {
            data: [0, 40, 20, 80, 60, 120, 100],
            fill: false,
            tension: 0.5,
            borderColor: "rgba(235,127,27,1)"
        }
    ]
};
const options = {
    scales: {
        x: {
            grid: {
                borderColor: ''
            }
        }, y: {
            beginAtZero: true 
            // ticks: {
            //     callback: function (val, index) {
            //         return val + '%';
            //     },
            }
        }
    }

}

const Profile = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="profile-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="profile-user">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-3 col-md-2 pe-0">
                                        <div className="img">
                                            <img src="/images/user/1.svg" alt="user" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-6 col-md-8">
                                        <div className="content">
                                            <h3>Morbi Tristique</h3>
                                            <span>@morbitristique</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-3 col-md-2">

                                        <a href="#" onClick={showModal} className="box-btn"><i className="ri-edit-2-line"></i> <span>Edit Profile</span></a>

                                    </div>
                                </div>
                                <p>Blockchain Evangelist. Content Creator & Graphic Design hobbyist. Loves all things gaming.</p>
                            </div>
                            <div className="raking">
                                <div className="top">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="item">
                                                <i className="ri-arrow-left-down-line"></i>
                                                <div className="content">
                                                    <h3>#12</h3>
                                                    <p>Engagement Rank</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="item">
                                                <i className="ri-arrow-left-down-line"></i>
                                                <div className="content">
                                                    <h3>62</h3>
                                                    <p>Total Posts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="shape">
                                    <img src="/images/shape/pshape.svg" alt="shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="chart-area">
                                <h3>Engagement Rate Statistic</h3>
                                <Line options={options} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className="content">
                        <form action="#">
                            <div className="user">
                                <img src="/images/user/2.png" alt="user" />
                                <a href="#">
                                    <input type="file" class="custom-file-input" />
                                </a>
                            </div>
                            <div class="col-lg-12 col-sm-12">
                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input type="text" class="form-control mb-3" value="Morbi Tristique" placeholder="Your name" />
                                </div>
                            </div>
                            <div class="col-lg-12 col-sm-12">
                                <div class="form-group">
                                    <label>Username</label>
                                    <input type="text" class="form-control mb-3" value="@morbitristique" placeholder="Username" />
                                </div>
                            </div>
                            <div class="col-lg-12 col-sm-12">
                                <div class="form-group twitter-con">
                                    <label>Your Name</label>
                                    <input type="text" class="form-control mb-4" placeholder="Your Name" />
                                    <i className="ri-twitter-fill"></i>
                                    <a href="#" className="box-btn"><i className="ri-refresh-line"></i> Reconnect</a>
                                </div>

                            </div>
                            <button className="up-btn w-100"><i className="ri-shield-check-fill"></i> Update</button>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
};


export default Profile;