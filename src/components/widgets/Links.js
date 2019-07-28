import React from 'react'

export default function Links() {
    return (
        <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/external-link 3.svg" alt="external-link"/></i>
                    <h2 className="widgetName">Mijn Links</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="links">
                <p><a href="Zorggroep.nl">Zorggroep.nl</a></p>
                <p><a href="zorgvisie.nl">zorgvisie.nl</a></p>
                <p><a href="medicalfacts.nl">medicalfacts.nl</a></p>
            </div>
        </div>
    )
}
