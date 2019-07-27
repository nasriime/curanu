import React from 'react'
import Header from './Header';
import LogoWrapper from './LogoWrapper';
import Navigation from './Navigation';

export default function headerContainer() {
    return (
        <div>
            <Navigation/>
            <LogoWrapper/>
            <Header/>
        </div>
    )
}
