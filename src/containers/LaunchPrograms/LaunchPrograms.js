import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import LaunchProgram from './LaunchProgram/LaunchProgram';
import * as classes from './LaunchPrograms.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';

class LaunchPrograms extends Component {
    componentDidMount(){
        this.props.onInit();
        console.log(this.props.launchPrograms);
    }
    render(){
        let launchProgs;
        if(this.props.launchPrograms.length === 0){
            if(!this.props.firstLoad){
                launchProgs = <Message message="No programs meet the filter criteria. Please use 'RESET FILTERS' button."/>
            } else{
                launchProgs = <Spinner />
            }
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
        loading: state.loading,
        firstLoad: state.firstLoad
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInit: () => dispatch(actions.initializeLaunchPrograms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchPrograms);