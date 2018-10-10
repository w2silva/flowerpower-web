/**
 *
 * Results
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectResults, { makeSelectSuppliers } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getSuppliers } from './actions'

import ResultsComponent from 'components/ResultsComponent';

export class Results extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    props.dispatch(getSuppliers());
  }

  render() {
    return (
      <ResultsComponent suppliers={this.props.suppliers}/>
    );
  }
}

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  results: makeSelectResults(),
  suppliers: makeSelectSuppliers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'results', reducer });
const withSaga = injectSaga({ key: 'results', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Results);
