import React, { Component } from 'react';

export default class Microblog extends Component {
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
              <img src="/images/Shape.svg" alt="pencil" />
            </i>
            <h2 className="widgetName">microblog</h2>
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
          <div className="microblog">
            <textarea />
            <div className="addBlog">
              <img src="/images/Bitmap 2.png" alt="camera" />
              <input className="no-border" type="button" value="Plaats" />
            </div>

            <div className="blogHeader">
              <div className="blogImage">
                <img src="/images/woman.png" alt="woman" />
              </div>
              <div className="blogData align-self-center">
                <div className="blogInfo">
                  <p>Ria de Vries</p>
                  <p>12/09/2016 - 11:10</p>
                </div>
                <div>
                  <img src="/images/Bitmap 4.png" alt="heart" />
                </div>
              </div>
            </div>

            <p className="blogTitle">
              Nieuwe campagne CuraNed gisteren van start gegaan
            </p>
            <img
              className="blogMainImage"
              src="/images/unnamed.png"
              alt="care"
            />
            <p className="reacties">
              Lees meer en reacties <span>(0)</span>
            </p>
          </div>
        </div>

        <div className="widget-footer">
          <p>Meer blogs</p>
          <i>
            <img src="/images/arrow-right.svg" alt="arrow-right" />
          </i>
        </div>
      </div>
    );
  }
}
