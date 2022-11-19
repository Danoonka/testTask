import * as React from "react";
import {useRef, useState} from "react";
import fetchData from "../utils/fetchData";
import '../components/jobTile/jobTile.css'
import locationLogo from "../assets/img.png"
import star from "../assets/img_1.png"
import save from "../assets/img_2.png"
import getDuration from "../utils/calculateDate"
import {Link} from "react-router-dom";
import {arrOfData} from "../utils/zapaska";
import Pagination from "../components/jobTile/pagination/Pagination";


//const apiData = fetchData("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu");


const JobTile = () => {
    //const data =  apiData.read();
    const data =  arrOfData;
    const ref =  useRef(null);

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10);

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container"  ref={ref} >
            {currentPosts.map((item) => (
                <Link to="/jobDetailed" state = {{item}}>
                    <div className="jobTile" id={item.id}>
                        <div className="img_div">
                            <img className='img'
                                alt='photo'
                                src={item.pictures[0]}
                            />
                        </div>
                        <div className="description_div">
                            <h2 className='description_header'>{item.title}</h2>
                            <p className='description_text'>
                                Department name
                                <span className="dot"></span>
                                {item.name} - AKH
                            </p>
                            <div className='description_location'>
                                <img src={locationLogo} alt="sign"/>
                                <p>{item.address}</p>
                            </div>
                        </div>
                        <div className='star_div'>
                            {[...Array(5)].map((x, i) =>
                                <div key={i}>
                                    <img src={star} alt="star"/>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className='save_div'>
                                <img src={save} alt="save"/>
                            </div>
                        </div>
                        <div className='duration_div'>
                            posted {getDuration(item.createdAt)} years ago
                        </div>
                    </div>
                </Link>
            ))}
            <Pagination
                postsPerPage={postPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </div>
    );
};

export default JobTile;