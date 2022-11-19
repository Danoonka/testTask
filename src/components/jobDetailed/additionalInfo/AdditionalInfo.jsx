import React from 'react';
import './additionalInfo.css'

const AdditionalInfo = ({data}) => {
    return (
        <div className="job_detail_additional_info_div">
            <div className="job_detail_heading_div">
                <h2 className="job_detail_heading">Additional info</h2>
            </div>
            <div className="job_detail_employment_type_div">
                <p>Employment type</p>
                <div className="job_detail_employment_type_container">
                    {data.employment_type.map(type =>
                        <div className="job_detail_employment_type_item">
                            {type}
                        </div>
                    )}
                </div>
            </div>
            <div className="job_detail_employment_type_div">
                <p>Benefits</p>
                <div className="job_detail_employment_type_container">
                    {data.benefits.map(benefit =>
                        <div className="job_detail_employment_type_item colorBenefit">
                            {benefit}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;