import React, { useState, useEffect } from 'react';
import RMain from './RMain/RMain';


const ReviewsContainer = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews data from MongoDB server (replace with your API endpoint)
        fetch('/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="reviews-container">
            {reviews.map((review) => (
                <RMain
                    key={review._id}
                    author={review.author}
                    date={review.date.date}
                    title={review.title}
                    body={review.body}
                />
            ))}
        </div>
    );
};

export default ReviewsContainer;