import React from 'react'

import s from '../scss/singleItem.module.scss';
import star from './../assets/Star.svg';
import userIcon from './../assets/userIcon.svg';

const SingleItem = ({ name, desc, language, url, author, stars, watchers }) => {
    return (
        <div className={s.singleItem}>
            <div className={s.singleItem_img}>
                <img src={url} alt='userImg' />
            </div>
            <div className={s.singleItem_userInfo}>
                <h1>Name: {name}</h1>
                <h3>Author: {author}</h3>
                <h3>Language: {language}</h3>
                <h3>Description: {desc}</h3>
            </div>
            <div className={s.singleItem_stats}>
                <span><img src={star} />  {stars}  stars</span>
                <span><img src={userIcon} />  {watchers}  watchers</span>
            </div>
        </div>
    )
}

export { SingleItem }