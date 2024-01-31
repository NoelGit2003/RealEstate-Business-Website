import React from 'react'
import './RMain.css'

const RMain = ({ author, date, title, body }) => {
    return (
        <div className='paddings rm-wrapper'>
            <div className="rm-head">
                <h1 className='orangeText'>Site Reviews:</h1>
            </div>
            <div class="reviews-container">
                <div class="review">
                    <p class="review-author">Author: {author}</p>
                    <p class="review-date">Date: {new Date(date).toLocaleDateString()}</p>
                    <h3 class="review-title">{title}</h3>
                    <p class="review-body">{body}</p>
                </div>
            </div>
        </div>
    )
}

export default RMain