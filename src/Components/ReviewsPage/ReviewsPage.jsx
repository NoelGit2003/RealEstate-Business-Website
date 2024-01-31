import React from 'react'
import RHeader from './ReviewsComponents/RHeader/RHeader'
import ReviewsContainer from './ReviewsComponents/ReviewsContainer'
import RMain from './ReviewsComponents/RMain/RMain'

const ReviewsPage = () => {
  return (
    <div>
      <RHeader />
      <RMain />
      <ReviewsContainer />
      
    </div>
  )
}

export default ReviewsPage