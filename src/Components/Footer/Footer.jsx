import React from 'react'
import { FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = (props) => {
  return (
    <section className="flexCenter f-wrapper">
      <div className="paddings flexCenter credit">
        <p>Made by Noel William</p>
       
        <FiHeart className='heart'></FiHeart>
   
      </div>
    </section>
  )
}

export default Footer