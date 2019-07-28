import React from 'react';
import HeaderContainer from '../components/header/HeaderContainer';
import ContactUs from '../components/contactUs/ContactUs';

export default function ContactUS() {
    return (
        <div>
            <HeaderContainer/>
            <div className="wrapper">
                <ContactUs/>
            </div>
        </div>
    )
}
