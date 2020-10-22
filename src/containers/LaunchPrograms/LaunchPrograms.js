import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import LaunchProgram from './LaunchProgram/LaunchProgram';
import * as classes from './LaunchPrograms.module.css';

class LaunchPrograms extends Component {
    componentDidMount(){
        this.props.onInit();
        console.log(this.props.launchPrograms);
    }
    render(){
        let launchProgs;
        if(this.props.launchPrograms.length === 0){
            launchProgs = 'Loading...'
        } else {
            launchProgs = this.props.launchPrograms.map(prog => {
                return <LaunchProgram key={Math.random()} prog={prog}/>
            })
        }

        return (
        <div className={classes.ProgramsContainer}>{launchProgs}</div>
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