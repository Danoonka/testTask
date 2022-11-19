import React from 'react';
import share from "../../../assets/img_3.png";
import './header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1 className="job_detail_heading">Job Details</h1>
                <div className="job_detail_save_div">
                    <div className="job_detail_save_img"/>
                    <p className="job_detail_save_text">Save to my list</p>
                </div>
                <div className="job_detail_share_div">
                    <img className="job_detail_share_img" src={share} alt="share"/>
                    <p className="job_detail_share_text">Share</p>
                </div>
            </header>
        </div>
    );
};

export default Header;