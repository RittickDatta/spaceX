import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as classes from './FilterControl.module.css';

class filterControl extends Component {
  render() {
    let isSelected;
    let filterStyling;

    if (typeof this.props.data === 'boolean') {
      if(this.props.forLaunch){
        isSelected = this.props.successfullLaunch === this.props.data;
      } else {
        isSelected = this.props.successfullLanding === this.props.data;
      }
    } else {
      isSelected = this.props.selectedYear === this.props.data.toString();
    }


    if (isSelected) {
      filterStyling = {
        backgroundColor: 'Green',
        color: 'white',
      };
    } else {
      filterStyling = {
        backgroundColor: '#69e669',
      };
    }

    return (
      <div
        className={classes.filterControl}
        onClick={() => {
          return this.props.clickHandler(
            typeof this.props.data === 'boolean'
              ? this.props.data
              : this.props.data.toString()
          );
        }}
        style={filterStyling}
      >
        {this.props.data.toString()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedYear: state.launchYear,
    successfullLaunch: state.successfullLaunch,
    successfullLanding: state.successfullLanding,
  };
};

export default connect(mapStateToProps)(filterControl);
