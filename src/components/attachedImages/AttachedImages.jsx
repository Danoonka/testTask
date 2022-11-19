import React from 'react';
import './attachedImages.css'

const AttachedImages = ({data}) => {
    return (
        <div>
            <div className="job_detail_heading_div">
                <h2 className="job_detail_heading">Attached images</h2>
            </div>
            <div className="with_img_div">
                {data.pictures.map(picture =>
                    <img className="attached_img" src={picture} alt="picture"/>
                )}
            </div>
        </div>
    );
};

export default AttachedImages;