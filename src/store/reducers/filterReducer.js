import * as actionTypes from '../actions/actionTypes';

let initalState = {
    launchPrograms : []
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case actionTypes.FILTER_BY_YEAR:
            return {
                ...state
            };
        case actionTypes.FILTER_BY_SUCCESSFUL_LAUNCH:
            return {
                ...state
            };
        case actionTypes.FILTER_BY_SUCCESSFUL_LANDING:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default reducer;