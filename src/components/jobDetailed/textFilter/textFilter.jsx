import React from 'react';
import "./textFilter.css"
import star from "../../../assets/img_1.png";

const TextFilter = ({data}) => {
    const firstPar = data.description.split("Responsopilities:")[0];
    const response = data.description.split("Compensation & Benefits:")[1].slice(2);
    const benefits = data.description.split("Compensation & Benefits:")[1].split(".");

    return (
        <div className="job_details_description_div">
            {[...Array(2)].map((x, i) =>
                <div key={i}>
                    <p className="job_details_description_txt">{firstPar}</p>
                </div>
            )}
            <h3 className="job_details_description_headings">Responsopilities:</h3>
            {[...Array(3)].map((x, i) =>
                <div key={i}>
                    <p className="job_details_description_txt">{response}</p>
                </div>
            )}
            <h3 className="job_details_description_headings">Compensation & Benefits:</h3>
            <div className="job_details_description_txt">{benefits.map((benefit) => <p className="job_details_description_txt_item"> {benefit} </p>)}</div>
        </div>
    );
};

export default TextFilter;