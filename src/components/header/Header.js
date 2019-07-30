import React from 'react';

export default function header() {
  return (
    <div className="headerWrapper">
      <div className="wrapper header flex-wrap">
       <ul className="headerList flex-wrap">
         <li><a href="#7">Artikelen</a></li>
         <li><a href="#8">Nieuws</a></li>
         <li><a href="#9">Evenementen</a></li>
         <li><a href="#10">Kwaliteitshandboek</a></li>
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
