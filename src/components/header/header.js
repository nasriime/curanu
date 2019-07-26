import React from 'react';

export default function header() {
  return (
    <div>
      <div className="navigationList">
        <ul>
          <li>Groepen</li>
          <li>Contact</li>
          <li>FAQS</li>
          <li>moelenboek</li>
          <li>Microblog</li>
          <li>Over ons</li>
        </ul>
        <div className="notifications">
          <i>
            <img src="../../assets/images/black-settings-button.svg" alt=""/>
          </i>
          <i>
            <img src="../../assets/images/notification-bell.svg"  alt=""/>
          </i>
        </div>
      </div>
    </div>
  );
}
