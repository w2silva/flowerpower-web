/**
 *
 * Plans
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import PlansComponent from 'components/PlansComponent';

import { bundleCheckout } from 'containers/Checkout/actions';
import { makeSelectDiagnosis } from 'containers/Quiz/selectors';
import makeSelectMe from 'containers/Me/selectors';

import { makeSelectBundles } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestBundles } from './actions';

export class Plans extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.dispatch(requestBundles())
  }

  bundleCheckout = (bundle) => {
    this.props.dispatch(bundleCheckout(bundle))
  }

  render() {
    return (
      <PlansComponent
        currentDiagnosis={this.props.diagnosis}
        bundles={this.props.bundles}
        bundleCheckout={this.bundleCheckout}
      />
    );
  }
}

Plans.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bundles: makeSelectBundles(),
  diagnosis: makeSelectDiagnosis(),
  me: makeSelectMe(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'plans', reducer });
const withSaga = injectSaga({ key: 'plans', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Plans);
