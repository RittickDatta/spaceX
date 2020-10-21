import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class LaunchPrograms extends Component {
    componentDidMount(){
        this.props.onInit();
    }
    render(){
        return (
            <p>Launch Programs</p>
        );
    }
}

const mapStateToProps = state => {
    return {
        launchPrograms: state.launchPrograms,
        launchYear: state.launchYear,
        successfullLaunch: state.successfullLaunch,
        successfullLanding: state.successfullLanding,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInit: () => dispatch(actions.initializeLaunchPrograms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchPrograms);