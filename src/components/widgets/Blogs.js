import React from 'react'

export default function Blogs() {
    return (
        <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/Shape.svg" alt="pencil"/></i>
                    <h2 className="widgetName">Blogs</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="blogs">
                <div className="blogHeader">
                    <div className="blogImage">
                        <img src="/images/Oval 2 2.png" alt="person"/>
                    </div>
                    <div className="blogData">
                        <div className="blogTitle">
                            <p>Jacob Cobijn</p>
                            <p>2/04/2016</p>
                        </div>
                        <div>
                            <img src="/images/Bitmap 4.png" alt="heart"/>
                            <img src="/images/dialog.png" alt="dialog"/>
                        </div>
                    </div>
                </div>

                <div className="blogBody">
                    <h2>Samenleving</h2>
                    <p>Het hebben van een partner die positief in het leven staat, is mogelijk goed voor de…</p>
                </div>
                
            </div>

            <div className="widget-footer">
                <p>Meer blogs</p>
                <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
            </div>

        </div>
    )
}
