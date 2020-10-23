import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as classes from './Filter.module.css';
import FilterControl from '../../components/FilterControl/FilterControl';

class Filter extends Component {
  componentDidMount() {}

  render() {
    const booleanFlags = [true, false];

    const yearControls = this.props.years.map((year) => {
      return (
        <FilterControl
          key={year}
          clickHandler={this.props.onFilterByYear}
          data={year}
        />
      );
    });

    const launchControls = booleanFlags.map((flag) => {
      return (
        <FilterControl
          key={flag}
          clickHandler={this.props.onFilterBySuccessfulLaunch}
          data={flag}
          forLaunch={true}
        />
      );
    });

    const landingControls = booleanFlags.map((flag) => {
      return (
        <FilterControl
          key={flag}
          clickHandler={this.props.onFilterBySuccessfulLanding}
          data={flag}
        />
      );
    });

   

    return (
      <React.Fragment>

        <div className={classes.filters}>
          <div className={classes.filters_title}>FILTERS</div>
          <div className={classes.launch_year_block}>
            <p className={classes.FilterTitle}>Launch Year</p>
            <div className={classes.yearDisplay}>{yearControls}</div>
          </div>
          <div className={classes.successful_launch_block}>
            <p className={classes.FilterTitle}>Successful Launch</p>
            <div className={classes.changeDirection}>{launchControls}</div>
          </div>
          <div className={classes.successful_landing_block}>
            <p className={classes.FilterTitle}>Successful Landing</p>
            <div className={classes.changeDirection}>{landingControls}</div>
          </div>
          <div className={classes.reset_filters}>
             <button className={classes.reset_filter_button}
              onClick={() => this.props.onClearFilters()}
             >Reset Filters</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    years: state.years,
    year: state.launchYear,
    successfullLaunch: state.successfullLaunch,
    successfullLanding: state.successfullLanding,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterByYear: (year) => dispatch(actions.filterByLaunchYear(year)),
    onFilterBySuccessfulLaunch: (launchedSuccessfully) =>
      dispatch(
        actions.filterBySuccessfullLaunch(launchedSuccessfully)
      ),
    onFilterBySuccessfulLanding: (landedSuccessfully) =>
      dispatch(
        actions.filterBySuccessfullLanding(landedSuccessfully)
      ),
    onClearFilters: () => dispatch(actions.clearFilters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
