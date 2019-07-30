import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDates } from '../../actions/EvenementenAction';

class Evenementen extends Component {

    componentDidMount(){
        this.props.fetchDates();
    }

    render() {
        console.log(this.props.items)
        return (
            <div className="widget">
            <div className="widgetHeader">
                <div className="header-part-one">
                    <i><img src="/images/calendar.svg" alt="calendar"/></i>
                    <h2 className="widgetName">Evenementen</h2>
                </div>
                <div className="header-part-two">
                    <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
                    <i><img src="/images/Shape 2.svg" alt="close"/></i>
                </div>
            </div>

            <div className="evenementen">
                <div className="cursor-pointer">
                    <span>10/12/2016</span>
                    <span>Zorgmarathon</span>
                </div>
                <div className="cursor-pointer">
                    <span>12/12/2016</span>
                    <span>Beurs</span>
                </div>
                <div className="cursor-pointer">
                    <span>30/12/2016</span>
                    <span>Onze zorgevenement</span>
                </div>
            </div>

            <div className="widget-footer">
                <p>Meer evenementen</p>
                <i><img src="/images/arrow-right.svg" alt="arrow-right"/></i>
            </div>

        </div>
        )
    }
}


Evenementen.propTypes = {
    fetchDates: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    items: state.dates.items
  })
  
  export default connect(mapStateToProps, { fetchDates })(Evenementen);