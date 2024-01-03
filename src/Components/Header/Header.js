import React from 'react'
import './Header.css'

function Header(){
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings h-container">
                <img className="logo" src="logo.png" alt="logo" width={50} />
                    <div className="flexCenter h-menu">
                        <a href="">Get Started</a>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        {/* <button className='button'>Contact</button>  */}
                    </div>
            </div>
        </section>
    )
}

export default Header