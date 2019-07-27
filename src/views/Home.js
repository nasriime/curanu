import React from 'react'
import HeaderContainer from '../components/header/HeaderContainer';
import Accordion from '../components/widgets/Accordion';
import Evenementen from '../components/widgets/Evenementen';

export default function home() {
    return (
        <div>
            <HeaderContainer/>
            <div className="wrapper">
                {/* <Accordion/> */}
                <Evenementen/>
            </div>
        </div>
    )
}
