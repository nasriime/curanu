import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoWrapper() {
  return (
    <div className="wrapper">
      <div className="logoWrapper">
        <Link to="/">
          <img src="/images/Bitmap.png" alt="logo" />
        </Link>
        <div className="logoName">
          <h2>
            Cura<span>Nu</span>
          </h2>
          <h6>Zorg en welzijn</h6>
        </div>
        <div className="intranet">
          <h2>Intranet</h2>
        </div>
      </div>
    </div>
  );
}
