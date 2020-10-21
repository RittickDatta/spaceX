import * as actionTypes from './actionTypes';

export const filterBySuccessfullLaunch = (wasLaunchSuccessful) => {
    return  {
        type: actionTypes.FILTER_BY_SUCCESSFUL_LAUNCH,
        wasLaunchSuccessful: wasLaunchSuccessful
    }
}
