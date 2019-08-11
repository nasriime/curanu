import React from 'react';

export default function SingleAccordion({
  id,
  title,
  content,
  active,
  handleclick
}) {
  return (
    <div className="accordion">
      <div
        className={`accordion-header ${active ? 'active' : ''}`}
        onClick={() => {
          handleclick(id);
        }}
      >
        <h2 className="widgetName">{title}</h2>
        <img
          className={`accordion-icon  ${active ? 'rotate' : ''}`}
          src="/images/arrow-right.svg"
          alt=""
        />
      </div>
      <div className={`accordion-body ${active ? 'active' : ''}`}>
        <div
          className="accordionText"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
