import React from 'react'

export default function Accordion() {
    return (
            <div className="widget">
                <div className="accordion">
                    <div className="accordion-header">
                        <h2 className="widgetName">Accordion1</h2>
                        <img src="/images/arrow-right.svg" alt="" />
                    </div>
                    <div className="accordion-body">
                        1Sed non urna. Donec et ante. Phasellus eu ligula. 
                        Vestibulum sit amet purus. Vivamus hendrerit, 
                        dolor at aliquet laoreet, mauris turpis porttito
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-header">
                        <h2 className="widgetName">Accordion2</h2>
                        <img src="/images/arrow-right.svg" alt="" />
                    </div>
                    <div className="accordion-body">
                        2Sed non urna. Donec et ante. Phasellus eu ligula. 
                        Vestibulum sit amet purus. Vivamus hendrerit, 
                        dolor at aliquet laoreet, mauris turpis porttito
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-header">
                        <h2 className="widgetName">Accordion3</h2>
                        <img src="/images/arrow-right.svg" alt="" />
                    </div>
                    <div className="accordion-body">
                        3Sed non urna. Donec et ante. Phasellus eu ligula. 
                        Vestibulum sit amet purus. Vivamus hendrerit, 
                        dolor at aliquet laoreet, mauris turpis porttito
                    </div>
                </div>
            </div>    
    )
}
