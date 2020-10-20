import * as actionTypes from './actionTypes';

export const filterByLaunchYear = (year) => {
    return {
        type: actionTypes.FILTER_BY_YEAR,
        year: year
    }
}

