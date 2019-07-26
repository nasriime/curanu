import React from 'react';

export default function header() {
  return (
    <div className="wrapper">
      <div className="navigationWrapper">
        <ul className="navigationList">
          <li><a href="#">Groepen</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQS</a></li>
          <li><a href="#">moelenboek</a></li>
          <li><a href="#">Microblog</a></li>
          <li><a href="#">Over ons</a></li>
        </ul>
        <div className="notifications">
          <a href="#">
            <img src="/images/black-settings-button.svg" alt="black-settings-button"/>
          </a>
          <a href="#">
            <img src="/images/notification-bell.svg"  alt="notification-bell"/>
          </a>
        </div>
      </div>
    </div>
  );
}
