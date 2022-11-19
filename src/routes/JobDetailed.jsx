import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Button from "../components/jobDetailed/buttons/Button";
import TextFilter from "../components/jobDetailed/textFilter/textFilter";
import "../components/jobDetailed/jobDetailed.css"
import Contacts from "../components/jobDetailed/contacts/Contacts";
import Header from "../components/jobDetailed/header/Header";
import MainInfo from "../components/jobDetailed/mainInfo/MainInfo";
import AdditionalInfo from "../components/jobDetailed/additionalInfo/AdditionalInfo";
import AttachedImages from "../components/attachedImages/AttachedImages";



const JobDetailed = () => {
    let location = useLocation();
    const props = location.state.item

    return (
        <div className='container container_job_details'>
            <div className="content_div">
                <Header/>
                <div className="first_btn">
                    <Button />
                </div>
                <MainInfo data={props}/>
                <div>
                    <TextFilter data = {props}/>
                    <div className="button_div">
                        <Button/>
                    </div>
                </div>
                <div className="to_change_order_div">
                    <AdditionalInfo data={props}/>
                    <AttachedImages data={props}/>
                </div>
                <div className="to_del_home_btn">
                    <Link to= '/'>
                        <div className="button_home"></div>
                    </Link>
                </div>
                <div className="additional_div"><p>RETURN TO JOB BOARD</p></div>
            </div>
            <div className="map_div">
                <h2 className="job_detail_heading contacts_heading">Contacts</h2>
               <Contacts data = {props}/>
            </div>
        </div>
    );
};

export default JobDetailed;

