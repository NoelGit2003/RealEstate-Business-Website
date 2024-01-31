import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src="./equinix.png" alt="company_1" />
            <img src="./prologis.png" alt="company_2" />
            <img src="./realty.png" alt="company_3" />
            <img src="./tower.png" alt="company_4" />
        </div>
    </section>
  )
}

export default Companies