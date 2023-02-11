import React from 'react'
import s from '../scss/pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={s.pagination}>
            <button>Previous</button>
            <div className={s.pagination_pages}>
                {pageNumbers.map(number => (
                    <span key={number} className='page'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </span>
                ))}
            </div>
            <button>Next</button>
        </div>
    )
}

export { Pagination }