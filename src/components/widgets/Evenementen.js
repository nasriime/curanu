import React from 'react'

export default function Evenementen() {
    return (
        <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/calendar.svg" alt="calendar"/></i>
                    <h2 className="widgetName">Accordion1</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="Evenementen">
                <div>
                    <span>10/12/2016</span>
                    <span>Zorgmarathon</span>
                </div>
                <div>
                    <span>12/12/2016</span>
                    <span>Beurs</span>
                </div>
                <div>
                    <span>30/12/2016</span>
                    <span>Onze zorgevenement</span>
                </div>
            </div>

            <div className="widget-footer">
                <p>Meer evenementen</p>
                <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
            </div>

        </div>
    )
}
