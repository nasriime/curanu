import React, { useState, useRef } from 'react'

export default function SingleAccordion({title, content}) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("");

    const body = useRef(null);

    function toggleAccordion(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${body.current.scrollHeight}px`);
        setRotateState(
            setActive === "active" ? "" : "rotate"
          );
    }

    return (
        <div className="accordion">
            <div className={`accordion-header ${setActive}`} onClick={toggleAccordion}>
                <h2 className="widgetName">{title}</h2>
                <img className={`accordion-icon ${setRotate}`} src="/images/arrow-right.svg" alt="" />
            </div>
            <div className="accordion-body"
                ref={body}
                style={{maxHeight: `${setHeight}`}}>
                      <div
                        className="accordionText"
                        dangerouslySetInnerHTML={{ __html: content }}
                        />
                </div>
        </div>
    )
}
