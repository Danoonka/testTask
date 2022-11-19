import React from 'react';
import location from '../../../assets/img.png'
import './contacts.css'

const Contacts = ({data}) => {
    return (
        <div className="contacts_container">
            <div className="contacts_txt_div">
                <div>
                    <div className=" circle">
                        <div className="contacts_txt">
                            <h3 className="contacts_txt_name">Department name</h3>
                            <p className="contacts_txt_name">{data.name}</p>
                            <div className="location_txt">
                                <img className="location_img" src={location} alt="location"/>
                                <p className="contacts_txt_item"> {data.address}</p>
                            </div>
                            <p className="contacts_txt_item">{data.phone}</p>
                            <p className="contacts_txt_item">{data.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe className="map" src={`//maps.google.com/maps?q=${data.location.lat},${data.location.long}&z=4&amp&output=embed`}/>
            </div>
        </div>
    );
};

export default Contacts;