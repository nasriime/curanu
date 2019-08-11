import React from 'react';
import SingleAccordion from './SingleAccordion';

export default class AccordionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);

    this.state = {
      tabs: [
        {
          id: 1,
          title: 'Accordion1',
          content: `1Sed non urna. Donec et ante. Phasellus eu ligula. 
          Vestibulum sit amet purus. Vivamus hendrerit, 
          dolor at aliquet laoreet, mauris turpis porttito`,
          active: true
        },
        {
          id: 2,
          title: 'Accordion2',
          content: `2Sed non urna. Donec et ante. Phasellus eu ligula. 
          Vestibulum sit amet purus. Vivamus hendrerit, 
          dolor at aliquet laoreet, mauris turpis porttito`,
          active: false
        },
        {
          id: 3,
          title: 'Accordion3',
          content: `3Sed non urna. Donec et ante. Phasellus eu ligula. 
          Vestibulum sit amet purus. Vivamus hendrerit, 
          dolor at aliquet laoreet, mauris turpis porttito`,
          active: false
        }
      ]
    };
  }

  updateTabs(id) {
    const { tabs } = this.state;
    const newtabs = tabs.map((tab, index) => {
      if (tab.id === id) {
        if (tab.active === true) {
          tab.active = false;
        } else {
          tab.active = true;
        }
      } else {
        tab.active = false;
      }
      return tab;
    });
    return newtabs;
  }

  handleTabClick(id) {
    this.setState({ tabs: this.updateTabs(id) });
  }

  render() {
    const tabsArray = this.state.tabs;
    return (
      <div className="widget">
        {tabsArray.map((tab, index) => {
          return (
            <SingleAccordion
              key={index}
              id={tab.id}
              title={tab.title}
              handleclick={this.handleTabClick}
              content={tab.content}
              active={tab.active}
            />
          );
        })}
      </div>
    );
  }
}
