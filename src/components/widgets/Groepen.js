import React from 'react'

export default function Groepen() {
    return (
        <div className="widget">
        <div className="widgetHeader">
            <div className="header-part-one">
                <i><img src="/images/groups.svg" alt="groups"/></i>
                <h2 className="widgetName">Mijn groepen</h2>
            </div>
            <div className="header-part-two">
                <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                <i><img src="/images/Shape 2.svg" alt="close"/></i>
            </div>
        </div>

        <div className="groepen">
            <div className="groepen-item">
                <img src="/images/Oval 2.png" alt="oval"/>
                <p>HRM</p>
            </div>
            <div className="groepen-item">
                <img src="/images/Oval 2 Copy 2.png" alt="oval"/>
                <p>Marketing &amp; Communicatie</p>
            </div>
            
        </div>

        <div className="widget-footer">
            <p>Meer groepen</p>
            <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
        </div>

    </div>
    )
}
