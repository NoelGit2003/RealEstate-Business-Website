import React from 'react'
import { useState } from 'react'

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"

import { MdOutlineArrowDropDown } from 'react-icons/md'

import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
    const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/*left side*/}
                
                <div className="v-left">
                    <div className="image-container">
                        <img src="./main3.jpg" alt="main2_image" />
                    </div>
                </div>

                {/*right side*/}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we provide to you</span>
                    <span className='secondaryText'>We are always there for you to find the right property
                        <br />
                        Be it for business or for the family, we've got your back</span>

                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                

                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i} >
                                        <AccordionItemHeading className='flexCenter accordionButton'>
                                            <AccordionItemButton className='flexCenter accordionButton'>

                                                <AccordionItemState>
                                                {( {expanded} ) => expanded ? setClassName("expanded") : setClassName('collapsed')}
                                            </AccordionItemState>

                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className='primaryText'>{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section >
    )
}

export default Value