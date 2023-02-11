import React from 'react'
import s from '../scss/pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={s.pagination}>
            <button>Previous</button>
            <div className={s.pagination_pages}>
                {pageNumbers.map(number => (
                    <span key={number} className={`${s.page} ${currentPage === number ? s.currentPage : ''}`} onClick={() => paginate(number)}>
                        {number}
                    </span>
                ))}
            </div>
            <button>Next</button>
        </div>
    )
}

export { Pagination }