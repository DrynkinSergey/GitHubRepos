import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../redux/slices/reposSlice';
import s from '../scss/searchInput.module.scss';

const SearchInput = () => {
    const { query } = useSelector(state => state.repos)
    const dispatch = useDispatch();
    return (
        <input placeholder='Search' value={query} onChange={(e) => dispatch(setQuery(e.currentTarget.value))} className={s.searchInput} type='text' />
    )
}

export { SearchInput }