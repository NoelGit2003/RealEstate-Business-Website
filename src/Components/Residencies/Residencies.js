import React from "react";
import { useRef
 } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import "./Residencies.css";
import data from "../../utils/slider.json";  //try to use firebase
import { sliderSettings } from "../../utils/common";


export const Residencies = () => {
    const swiperRef = useRef();

    return (
        <section id="residencies" className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings} onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }} className= "swiper"
                > 
                    <div className="flexCenter r-button">
                        <button onClick={() => swiperRef.current.slidePrev()} > &lt; </button>
                        <button onClick={() => swiperRef.current.slideNext()} > &gt; </button>
                    </div>

                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="property_images" />


                                <div className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </div>


                                <div className="primaryText">
                                    {card.name}
                                </div>


                                <span className="secondaryText">
                                    {card.detail}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>

    )
}

export default Residencies

// const SliderButtons = () => {
//     // const swiper = useSwiper();

//     return (
//         <div className=" flexCenter r-button">
//             {/* <button onClick={() => swiper.slidePrev()}>&lt;</button>
//         <button onClick={() => swiper.slideNext()}>&gt;</button> */}
//             <button onClick={() => swiperRef.current.slideNext()}>
//                 Go to Next Slide
//             </button>
//         </div>
//     );
// };

