import React from 'react';
import getDuration from "../../../utils/calculateDate";
import {strReplace} from "../../../utils/ReplaceSymbols";
import './mainInfo.css'

const MainInfo = ({data}) => {
    return (
        <div>
            <div className="job_detail_main_info_div">
                <div className="job_detail_title">
                    <h2>{data.title}</h2>
                </div>
                <div className="job_detail_date">posted {getDuration(data.createdAt)} years ago</div>
                <div className="job_detail_salary">
                    <div className="job_detail_salary_text">{unescape('%u20AC')}{strReplace(data.salary)}</div>
                    <div className="job_detail_salary_tips">Brutto, per year</div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;