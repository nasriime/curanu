import React from 'react'
import SingleAccordion from './SingleAccordion';


export default function AccordionsContainer2() {
    return (
            <div className="widget">
                <SingleAccordion 
                    title="Accordion1"
                    content="1Sed non urna. Donec et ante. Phasellus eu ligula. 
                        Vestibulum sit amet purus. Vivamus hendrerit, 
                        dolor at aliquet laoreet, mauris turpis porttito"/>
               <SingleAccordion 
                    title="Accordion2"
                    content="2Sed non urna. Donec et ante. Phasellus eu ligula. 
                    Vestibulum sit amet purus. Vivamus hendrerit, 
                    dolor at aliquet laoreet, mauris turpis porttito"/>

                <SingleAccordion 
                    title="Accordion3"
                    content="3Sed non urna. Donec et ante. Phasellus eu ligula. 
                    Vestibulum sit amet purus. Vivamus hendrerit, 
                    dolor at aliquet laoreet, mauris turpis porttito"/>
            </div>    
    )
}
