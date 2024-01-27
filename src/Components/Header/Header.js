import React, { useRef } from 'react'
import './Header.css'

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
                    <div>Reviews</div>
                    <div onClick={() => handleClickScroll('residencies')}>Residencies</div>
                    <div onClick={() => handleClickScroll('ourValue')}>Our Value</div>
                    <div onClick={() => handleClickScroll('contactUs')}>Contact Us</div>
                </div>
            </div>
        </section>
    )
}

export default Header