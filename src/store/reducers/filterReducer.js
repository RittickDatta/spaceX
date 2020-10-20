import * as actionTypes from '../actions/actionTypes';

let initalState = {
    launchPrograms : [],
    launchYear: '2006',
    successfullLaunch: true,
    successfullLanding: true
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case actionTypes.INIT_PROGRAMS:
            return {
                ...state,
                launchPrograms: action.launch_programs
            }
        case actionTypes.FILTER_BY_YEAR:
            return {
                ...state,
                launchYear: action.year
            };
        case actionTypes.FILTER_BY_SUCCESSFUL_LAUNCH:
            return {
                ...state,
                successfullLaunch: action.wasLaunchSuccessful
            };
        case actionTypes.FILTER_BY_SUCCESSFUL_LANDING:
            return {
                ...state,
                successfullLanding: action.wasLandingSuccessful
            };
        default:
            return state;
    }
}

export default reducer;