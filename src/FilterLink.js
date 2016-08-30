/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Link from './Link';

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.filter
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    whenSetFilter: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: props.filter
      })
    }
  }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;