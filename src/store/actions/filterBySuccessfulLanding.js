import * as actionTypes from './actionTypes';

export const filterBySuccessfullLanding = (wasLandingSuccessful) => {
    return  {
        type: actionTypes.FILTER_BY_SUCCESSFUL_LANDING,
        wasLandingSuccessful: wasLandingSuccessful
    }
}
