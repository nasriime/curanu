import React from 'react'
import HeaderContainer from '../components/header/HeaderContainer';
import AccordionsContainer from '../components/widgets/Accordion/AccordionsContainer';
import Evenementen from '../components/widgets/Evenementen';
import Nieuws from '../components/widgets/Nieuws';
import Add from '../components/widgets/Add';
import Direct from '../components/widgets/Direct';
import Blogs from '../components/widgets/Blogs';
import Kwaliteitshandboek from '../components/widgets/Kwaliteitshandboek';
import Peilingen from '../components/widgets/Peilingen';
import Links from '../components/widgets/Links';
import Telefoonboek from '../components/widgets/Telefoonboek';
import Groepen from '../components/widgets/Groepen';
import Microblog from '../components/widgets/Microblog';

export default function home() {
    return (
        <div>
            <HeaderContainer/>
            <div className="wrapper">
                <div className="display-flex">
                    <div className="col">
                        <AccordionsContainer/>
                        <Evenementen/>
                        <Nieuws/>
                        <Add/>
                    </div>
                    <div className="col">
                        <Direct/>
                        <Blogs/>
                        <Kwaliteitshandboek/>
                        <Peilingen/>
                        <Links/>
                    </div>
                    <div className="col">
                        <Telefoonboek/>
                        <Microblog/>
                        <Groepen/>
                    </div>
                </div>
            </div>
        </div>
    )
}
