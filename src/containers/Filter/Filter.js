import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Filter extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.onFilterByYear('2007')}>
          Filter Year
        </button>
        <button onClick={() => this.props.onFilterBySuccessfulLaunch(true)}>
            Filter Launch
        </button>
        <button onClick={() => this.props.onFilterBySuccessfulLanding(false)}>
            Filter Landing
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    years: state.years,
    year: state.launchYear
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterByYear: (year) => dispatch(actions.filterByLaunchYear(year)),
    onFilterBySuccessfulLaunch: (launchedSuccessfully) => dispatch(actions.filterBySuccessfullLaunch(launchedSuccessfully)),
    onFilterBySuccessfulLanding: (landedSuccessfully => dispatch(actions.filterBySuccessfullLanding(landedSuccessfully)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
