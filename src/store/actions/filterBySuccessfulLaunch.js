import * as actionTypes from './actionTypes';

export const filterBySuccessfulLaunch = (wasLaunchSuccessful) => {
    return  {
        type: actionTypes.FILTER_BY_SUCCESSFUL_LAUNCH,
        wasLaunchSuccessful: wasLaunchSuccessful
    }
}
