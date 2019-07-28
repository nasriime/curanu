import React from 'react'
import HeaderContainer from '../components/header/HeaderContainer';
import Accordion from '../components/widgets/Accordion';
import Evenementen from '../components/widgets/Evenementen';
import Nieuws from '../components/widgets/Nieuws';
import Add from '../components/widgets/Add';
import Direct from '../components/widgets/Direct';

export default function home() {
    return (
        <div>
            <HeaderContainer/>
            <div className="wrapper">
                {/* <Accordion/> */}
                {/* <Evenementen/> */}
                {/* <Nieuws/> */}
               {/* <Add/> */}
               <Direct/>
            </div>
        </div>
    )
}
