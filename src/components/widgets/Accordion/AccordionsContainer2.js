import React from 'react';
import SingleAccordion2 from './SingleAccordion2';

export default class AccordionsContainer2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);

    this.state = {
      tabs: [
        {
          id: 1,
          title: 'tab 1',
          content: 'this is tab 1',
          active: true
        },
        {
          id: 2,
          title: 'tab 2',
          content: 'this is tab 2',
          active: false
        },
        {
          id: 3,
          title: 'tab 3',
          content: 'this is tab 3',
          active: false
        }
      ]
    };
  }

  updateTabs(id) {
    const {tabs} = this.state;
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
            <SingleAccordion2
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
