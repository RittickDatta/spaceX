import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initializeLaunchProgramsStart = () => {
  return {
    type: actionTypes.INIT_PROGRAMS_START
  }
}

export const initializeLaunchProgramsSuccess = (fetchedLaunchedPrograms) => {
  return {
    type: actionTypes.INIT_PROGRAMS_SUCCESS,
    launchedPrograms: fetchedLaunchedPrograms
  }
}

export const initailizeLaunchProgramsFailure = () => {
  return {
    type: actionTypes.INIT_PROGRAMS_FAILURE,
    
  }
}

// create subActions like initProgramSuccess. return dispatch => { dispatch(initProgramsSuccess)} [async calls, use dispatch, return regular action objects]
export const initializeLaunchPrograms = () => {
  return dispatch => {
    dispatch(initializeLaunchProgramsStart());
    axios
      .get('https://api.spacexdata.com/v3/launches?limit=100')
      .then(res => {
        const fetchedLaunchedPrograms = [];
        for(let x of res.data){
          fetchedLaunchedPrograms.push(x);
        }

        console.log(fetchedLaunchedPrograms);
        dispatch(initializeLaunchProgramsSuccess(fetchedLaunchedPrograms));
      })
      .catch(err => {
        dispatch(initailizeLaunchProgramsFailure());
      }) 
  }
};
