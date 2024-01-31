import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import { BsFillChatDotsFill } from 'react-icons/bs'

const Contact = () => {

    return (
        <section id='contactUs' className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum vel culpa doloribus tempore enim dolor. Impedit ut laudantium consequatur alias repudiandae aperiam voluptatibus animi error ad harum, sapiente itaque et vero expedita, tenetur explicabo.</span>

                    <span className="flexRowStart contactModes">
                        {/*first row */}
                        <span className="flexColStart row">
                            <span className="flexColCenter mode">
                                <span className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>758-644-1567</span>
                                    </div>
                                </span>
                                <div className="flexCenter button">Message Now</div>
                            </span>

                            <span className="flexColCenter mode">
                                <span className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>758-644-1567</span>
                                    </div>
                                </span>
                                <div className="flexCenter button">Chat Now</div>
                            </span>
                        </span>

                        <span className="flexColStart row">
                            <span className="flexColCenter mode">
                                <span className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>758-644-1567</span>
                                    </div>
                                </span>
                                <div className="flexCenter button">Call Now</div>
                            </span>

                            <span className="flexColCenter mode">
                                <span className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Online Meet</span>
                                        <span className='secondaryText'>758-644-1567</span>
                                    </div>
                                </span>
                                <div className="flexCenter button">Book Now</div>
                            </span>
                        </span>



                    </span>
                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./main4.jpg" alt="main4_image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact