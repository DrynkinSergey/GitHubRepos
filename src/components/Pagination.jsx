import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/slices/reposSlice';
import s from '../scss/pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts }) => {
    const { currentPage } = useSelector(state => state.repos);
    const dispatch = useDispatch();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className={s.pagination}>
            <button disabled={currentPage === pageNumbers[0]} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>Previous</button>
            <div className={s.pagination_pages}>

                {pageNumbers.map(number => (
                    <span key={number} className={`${s.page} ${currentPage === number ? s.currentPage : ''}`} onClick={() => dispatch(setCurrentPage(number))}>
                        {number}
                    </span>
                ))}
            </div>

            <button disabled={currentPage === pageNumbers.length} onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Next</button>
        </nav>
    )
}

export { Pagination }