import React from 'react'
import HeaderContainer from '../components/header/HeaderContainer';
import Accordion from '../components/widgets/Accordion';
// import Evenementen from '../components/widgets/Evenementen';
// import Nieuws from '../components/widgets/Nieuws';
// import Add from '../components/widgets/Add';
// import Direct from '../components/widgets/Direct';
// import Blogs from '../components/widgets/Blogs';
// import Kwaliteitshandboek from '../components/widgets/Kwaliteitshandboek';
// import Peilingen from '../components/widgets/Peilingen';
// import Links from '../components/widgets/Links';
// import Telefoonboek from '../components/widgets/Telefoonboek';
// import Groepen from '../components/widgets/Groepen';
// import Microblog from '../components/widgets/Microblog';

export default function home() {
    return (
        <div>
            <HeaderContainer/>
            <div className="wrapper">
                <Accordion/>
                {/* <Evenementen/> */}
                {/* <Nieuws/> */}
               {/* <Add/> */}
               {/* <Direct/> */}
               {/* <Blogs/> */}
               {/* <Kwaliteitshandboek/> */}
               {/* <Peilingen/> */}
               {/* <Links/> */}
               {/* <Telefoonboek/> */}
               {/* <Groepen/> */}
               {/* <Microblog/> */}
            </div>
        </div>
    )
}
