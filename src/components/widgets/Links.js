import React, { Component } from 'react';

export default class Links extends Component {
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
              <img src="/images/external-link 3.svg" alt="external-link" />
            </i>
            <h2 className="widgetName">Mijn Links</h2>
          </div>
          <div className="header-part-two">
            <i>
              <img src="/images/arrow-right.svg" alt="arrow-right" />
            </i>
            <i>
              <img
                className={active ? 'rotate' : ''}
                src="/images/Shape 2.svg"
                alt="close"
              />
            </i>
          </div>
        </div>

        <div className={`widget-body ${active ? 'active' : ''}`}>
          <div className="links">
            <p>
              <a href="Zorggroep.nl">Zorggroep.nl</a>
            </p>
            <p>
              <a href="zorgvisie.nl">zorgvisie.nl</a>
            </p>
            <p>
              <a href="medicalfacts.nl">medicalfacts.nl</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
