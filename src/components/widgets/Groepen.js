import React, { Component } from 'react';

export default class Groepen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    const { active } = this.state;
    return (
      <div className="widget">
        <div className="widgetHeader" onClick={this.toggle}>
          <div className="header-part-one">
            <i>
              <img src="/images/groups.svg" alt="groups" />
            </i>
            <h2 className="widgetName">Mijn groepen</h2>
          </div>
          <div className="header-part-two">
            <i>
              <img
                className={active ? 'rotate' : ''}
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </i>
            <i>
              <img src="/images/Shape 2.svg" alt="close" />
            </i>
          </div>
        </div>

        <div className={`widget-body ${active ? 'active' : ''}`}>
          <div className="groepen">
            <div className="groepen-item">
              <img src="/images/Oval 2.png" alt="oval" />
              <p>HRM</p>
            </div>
            <div className="groepen-item">
              <img src="/images/Oval 2 Copy 2.png" alt="oval" />
              <p>Marketing &amp; Communicatie</p>
            </div>
          </div>
        </div>

        <div className="widget-footer">
          <p>Meer groepen</p>
          <i>
            <img src="/images/arrow-right.svg" alt="arrow-right" />
          </i>
        </div>
      </div>
    );
  }
}
