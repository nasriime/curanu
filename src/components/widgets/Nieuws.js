import React from 'react'

export default function Nieuws() {
    return (
            <div className="widget">
                <div className="widgetHeader">
                    <div className="header-part-one">
                        <i><img src="/images/newspaper.svg" alt="newspaper"/></i>
                        <h2 className="widgetName">nieuws</h2>
                    </div>
                    <div className="header-part-two">
                        <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                        <i><img src="/images/Shape 2.svg" alt="close"/></i>
                    </div>
                </div>

                <div className="nieuws">
                    <div className="nieuws-item cursor-pointer">
                        <i><img src="/images/Rectangle 5.png" alt="laptop"/></i>
                        <div className="nieuws-text">
                            <div>
                                <p>29/02/2016</p>
                                <img src="/images/Bitmap 4.png" alt="heart"/>
                            </div>
                            <p>Geef je mening over ons intranet</p>
                        </div>
                    </div>

                    <div className="nieuws-item cursor-pointer">
                        <i><img src="/images/Rectangle 5 Copy.png" alt="nurse"/></i>
                        <div className="nieuws-text">
                            <div>
                                <p>29/02/2016</p>
                                <img src="/images/Bitmap 4.png" alt="heart"/>
                            </div>
                            <p>Geef je mening over ons intranet</p>
                        </div>
                    </div>

                    <div className="nieuws-item">
                        <i><img src="/images/Rectangle 5 Copy 2.png" alt="hands"/></i>
                        <div className="nieuws-text">
                            <div>
                                <p>29/02/2016</p>
                                <img src="/images/Bitmap 4.png" alt="heart"/>
                            </div>
                            <p>Geef je mening over ons intranet</p>
                        </div>
                    </div>
                   
                </div>

                <div className="widget-footer">
                    <p>Meer nieuws</p>
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                </div>

            </div>
    )
}
