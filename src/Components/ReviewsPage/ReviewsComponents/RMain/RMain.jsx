import './RMain.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = ({ author, date, title, body }) => {
    return (
        <div className='paddings rm-wrapper'>
            {/* <div className="rm-head">
                <h1 className='orangeText'>Site Reviews:</h1>
            </div> */}
            <div className="reviews-container">
                <div className="review">
                    <p className="review-author">Author: {author}</p>
                    <p className="review-date">Date: {new Date(date).toLocaleDateString()}</p>
                    <h3 className="review-title">{title}</h3>
                    <p className="review-body">{body}</p>
                </div>
            </div>
        </div>
    )
}


const RMain = () => {
    
    const [reviews, setReviews] = useState([]);

    const reviewFetcher = async () => {
        try {
            const {data} = await axios.get('/reviews')
            setReviews(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
        return null;
    }

    useEffect(() => {
        reviewFetcher();
    }, []);

    return (
        <div>
            {reviews.map((review,index) => {
                return <div key={index}>
                    <Review
                        key={review._id}
                        author={review.author}
                        date={review.date}
                        title={review.title}
                        body={review.body}
                    />
                </div>
            })}
        </div>
    );
};

export default RMain