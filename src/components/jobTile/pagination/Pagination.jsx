import React from 'react';
import './pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <div className="pagination">
                <a href="#">
                    <div className="pagination_right_arrow">
                        <p></p>
                    </div>
                </a>
                {pageNumbers.map(pageNumber => (
                    <div key={pageNumber} id={pageNumber} className="page_item">
                        <a onClick={()=>paginate(pageNumber)}>
                            {pageNumber}
                        </a>
                    </div>
                ))}
                <a href="#">
                    <div className="pagination_left_arrow">
                        <p></p>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Pagination;