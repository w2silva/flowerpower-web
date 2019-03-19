/**
 *
 * Appointment
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import AppointmentComponent from 'components/AppointmentComponent'
import NewAppointmentComponent from 'components/NewAppointmentComponent'
import { makeSelectClient } from 'containers/Me/selectors';

import { requestAppointment, requestSlots, requestAppointSlot } from './actions';
import { makeSelectAppointment, makeSelectSlots } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Appointment extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id
    if (id) {
      this.props.dispatch(requestAppointment(id))
    } else {
      this.props.dispatch(requestSlots())
    }
  }

  appointSlot = (slot, profile) => {
    this.props.dispatch(requestAppointSlot(slot.id || slot, profile._id || profile))
  }

  render() {
    console.log(this.props)
    if (this.props.match.params.id && !this.props.appointment) {
      return null
    }

    if (!this.props.match.params.id) {
      return (
        <NewAppointmentComponent
          appointSlot={this.appointSlot}
          slots={this.props.slots}
          profiles={this.props.client.profiles}/>
      )
    }

    return (
      <AppointmentComponent
        profiles={this.props.client.profiles}
        appointment={this.props.appointment}/>
    );
  }
}

Appointment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  client: makeSelectClient(),
  appointment: makeSelectAppointment(),
  slots: makeSelectSlots(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'appointment', reducer });
const withSaga = injectSaga({ key: 'appointment', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Appointment);
