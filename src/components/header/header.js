import React from 'react';

export default function header() {
  return (
    <div className="headerWrapper">
      <div className="wrapper header">
       <ul className="headerList">
         <li><a href="#">Artikelen</a></li>
         <li><a href="#">Nieuws</a></li>
         <li><a href="#">Evenementen</a></li>
         <li><a href="#">Kwaliteitshandboek</a></li>
       </ul>
       <form className="searchForm">
         <div> 
          <input type="text" />
          <button type="button"><img src="/images/zoeken.svg" alt=""/></button>
         </div>
       </form>
      </div>
    </div>
  );
}
