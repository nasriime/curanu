import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="wrapper">
      <div className="navigationWrapper flex-wrap">
        <ul className="navigationList flex-wrap">
          <li>
            <a href="#1">Groepen</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#3">FAQS</a>
          </li>
          <li>
            <a href="#4">moelenboek</a>
          </li>
          <li>
            <a href="#5">Microblog</a>
          </li>
          <li>
            <a href="#6">Over ons</a>
          </li>
        </ul>
        <div className="notifications">
          <span>
            <img
              src="/images/black-settings-button.svg"
              alt="black-settings-button"
            />
          </span>
          <span>
            <img src="/images/notification-bell.svg" alt="notification-bell" />
          </span>
        </div>
      </div>
    </div>
  );
}
