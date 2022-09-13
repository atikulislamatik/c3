import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';


const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: '#',

    onChange(info) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const Addpost = ({ placeholder }) => {
  
    return (
        <>
            <div className="add-area">
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
                            <form action="#">
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <label>Post title</label>
                                        <input type="text" class="form-control mb-3" placeholder="Input your post title" />
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <label>Labels</label>
                                        <input type="text" class="form-control mb-3" placeholder="Add your labels" />
                                        <i className="ri-add-line"></i>

                                    </div>
                                    <ul className="hash d-flex">
                                        <li><span>CRYPTO</span></li>
                                        <li><span>NFT</span></li>
                                        <li><span>EVENT</span></li>
                                        <li><span>NEWS</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <label>Labels</label>
                                        <input type="text" class="form-control mb-3" placeholder="Add your labels" />
                                        <i className="ri-add-line"></i>

                                    </div>
                                    <ul className='d-flex align-items-center key'>
                                        <li><span>DONEC</span></li>
                                        <li><span>QUIS</span></li>
                                        <li><span>ARCU</span></li>
                                        <li><span>VELIT</span></li>
                                        <li><span>PRETIUM</span></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <label className="main" >Main banner</label>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Drop files or click here to upload</p>

                            </Dragger>

                        </div>
                        <div className="col-12 mt-4">
                            <label >Content</label>

                           
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default Addpost;