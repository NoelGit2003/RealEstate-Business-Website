import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

    const handleClickScroll = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings h-container">
                <div className="flexRowStart name">
                    <img className="logo" src="logo.png" alt="logo" width={50} />
                    <h1 className='nameHead'>Royalty Real Estate</h1>
                </div>

                <div className="flexCenter h-menu">
                    <div onClick={() => handleClickScroll('extra')}><Link to="/home">Home</Link></div>
                    <div><Link to="/reviews">Reviews</Link></div>
                    <div onClick={() => handleClickScroll('residencies')}><Link to="/home">Residencies</Link></div>
                    <div onClick={() => handleClickScroll('ourValue')}><Link to="/home">Our Value</Link></div>
                    <div onClick={() => handleClickScroll('contactUs')}><Link to="/home">Contact Us</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Header