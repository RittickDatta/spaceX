import * as actionTypes from '../actions/actionTypes';

let initalState = {
    launchPrograms : null,
    launchYear: '2006',
    successfullLaunch: true,
    successfullLanding: true,
    loading: false
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case actionTypes.INIT_PROGRAMS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.INIT_PROGRAMS_SUCCESS:
            return {
                ...state,
                launchPrograms: action.launchedPrograms,
                loading: false
            }
        case actionTypes.INIT_PROGRAMS_FAILURE:
            return {
                ...state,
                loading: false
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