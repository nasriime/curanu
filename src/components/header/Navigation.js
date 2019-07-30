import React from 'react'

export default function Navigation() {
    return (
        <div className="wrapper">
            <div className="navigationWrapper flex-wrap">
                <ul className="navigationList flex-wrap">
                    <li><a href="#">Groepen</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQS</a></li>
                    <li><a href="#">moelenboek</a></li>
                    <li><a href="#">Microblog</a></li>
                    <li><a href="#">Over ons</a></li>
                </ul>
                <div className="notifications">
                    <span>
                        <img src="/images/black-settings-button.svg" alt="black-settings-button"/>
                    </span>
                    <span>
                        <img src="/images/notification-bell.svg"  alt="notification-bell"/>
                    </span>
                </div>
            </div>
        </div>
    )
}
