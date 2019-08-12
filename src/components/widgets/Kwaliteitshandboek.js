import React, { Component } from 'react';

export default class Kwaliteitshandboek extends Component {
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
              <img
                src="/images/kwaliteitshandboek.svg"
                alt="kwaliteitshandboek"
              />
            </i>
            <h2 className="widgetName">Kwaliteitshandboek</h2>
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
          <div className="Kwaliteitshandboek">
            <div className="Kwaliteitshandboek-item">
              <h3>Klachtenprocedure</h3>
              <p>bijgewerk 18-04-2016</p>
            </div>
            <div className="Kwaliteitshandboek-item">
              <h3>Periodieke test gebruikersgroepen</h3>
              <p>bijgewerk 10-02-2016</p>
            </div>
            <div className="Kwaliteitshandboek-item">
              <h3>Dienstrichtlijn tweede niveau</h3>
              <p>bijgewerk 09-05-2015</p>
            </div>
          </div>
        </div>

        <div className="widget-footer">
          <p>Meer Kwaliteitshandboek</p>
          <i>
            <img src="/images/arrow-right.svg" alt="arrow-right" />
          </i>
        </div>
      </div>
    );
  }
}
