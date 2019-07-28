import React from 'react'

export default function Direct() {
    return (
        <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/external-link.svg" alt="external-link"/></i>
                    <h2 className="widgetName">Direct naar</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="direct">
                <div className="direct-item">
                    <div>
                        <img src="/images/images.png" alt=""/>
                    </div>
                    <p>Youforce</p>
                </div>
            
                <div className="direct-item">
                    <div>
                        <img src="/images/Bitmap.png" alt=""/>
                    </div>
                    <p>MIP-meldingen</p>
                </div>

                <div className="direct-item">
                    <div>
                        <img src="/images/Bitmap 3.png" alt=""/>
                    </div>
                    <p>Topdesk</p>
                </div>
            </div>
        </div>
    )
}
