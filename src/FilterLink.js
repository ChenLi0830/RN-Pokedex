/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component, PropTypes} from 'react';
import Link from './Link';
class FilterLink extends Component {
  componentWillMount() {
    const {store} = this.context;
    this._unsubscribe = store.subscribe(() =>
        this.forceUpdate()
    )
  }
  
  componentWillUnmount() {
    this._unsubscribe();
  }
  
  render() {
    const {store} = this.context;
    const props = this.props;
    const state = store.getState();
    
    return <Link
        active={props.filter === state.filter}
        whenSetFilter={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter
          })
        }
    >
      {props.children}
    </Link>
  }
}

FilterLink.propTypes = {
  filter: PropTypes.string
};

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;