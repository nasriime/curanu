import React from 'react'

export default function Peilingen() {
    return (
        <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/kwaliteitshandboek.svg" alt="kwaliteitshandboek"/></i>
                    <h2 className="widgetName">Peilingen</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="peilingen">
                <p>Er zijn geen peiling</p>
            </div>
        </div>
    )
}