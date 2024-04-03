import React from 'react'
import './RHeader.css'

const RHeader = () => {
    return (
        <div className='rh-wrapper'>
            <div className="flexCenter heading">
                REVIEWS
            </div>
            <div className="primaryText greeting">
                Reviews by our Happy Clients
            </div>
            <div className='flexCenter s-block'>
                <div className="stars"></div>
                <div className='orangeText'>1155 Reviews</div>
            </div>
            <div className="innerWidth r_button">
                <button className="button">Write a review</button>
            </div>
            <div className="border"></div>
            <div className="rm-head innerWidth">
                <h1 className='orangeText'>Site Reviews:</h1>
            </div>
        </div>
    )
}

export default RHeader