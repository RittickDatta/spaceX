import * as actionTypes from './actionTypes';
import axios from 'axios';


// create subActions like initProgramSuccess. return dispatch => { dispatch(initProgramsSuccess)} [async calls, use dispatch, return regular action objects]
export const initializeLaunchPrograms = () => {
  let data;
  axios
    .get('https://api.spacexdata.com/v3/launches?limit=100')
    .then((response) => {
      data =  response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  return {
    type: actionTypes.INIT_PROGRAMS,
    launch_programs: data,
  };
};
