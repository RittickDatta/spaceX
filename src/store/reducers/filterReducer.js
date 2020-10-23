import * as actionTypes from '../actions/actionTypes';

const initalYear = 2006;
const numberOfYears = new Date().getFullYear() - initalYear;
const years = [];
for (let i = 0; i < numberOfYears + 1; i++) {
  years.push(initalYear + i);
}

let initalState = {
  years: years,
  launchPrograms: [],
  launchProgramsBackup: [],
  launchYear: '2006',
  successfullLaunch: null,
  successfullLanding: null,
  loading: false,
  firstLoad: true
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PROGRAMS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.INIT_PROGRAMS_SUCCESS:
      return {
        ...state,
        launchPrograms: action.launchedPrograms,
        launchProgramsBackup: action.launchedPrograms,
        loading: false,
        firstLoad: false
      };
    case actionTypes.INIT_PROGRAMS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.FILTER_BY_YEAR:
      let updatedLaunchPrograms = [];
      for (let prog of state.launchPrograms) {
        if (prog.launch_year === action.year) {
          updatedLaunchPrograms.push(prog);
        }
      }
      console.log(updatedLaunchPrograms);
      return {
        ...state,
        launchPrograms: updatedLaunchPrograms,
        launchYear: action.year,
      };
    case actionTypes.FILTER_BY_SUCCESSFUL_LAUNCH:
      let updatedLaunchProgramsLaunch = [];
      if (action.wasLaunchSuccessful) {
        for (let prog of state.launchPrograms) {
          if (prog.launch_success) {
            updatedLaunchProgramsLaunch.push(prog);
          }
        }
      } else {
        for (let prog of state.launchPrograms) {
          if (!prog.launch_success) {
            updatedLaunchProgramsLaunch.push(prog);
          }
        }
      }

      return {
        ...state,
        launchPrograms: updatedLaunchProgramsLaunch,
        successfullLaunch: action.wasLaunchSuccessful,
      };
    case actionTypes.FILTER_BY_SUCCESSFUL_LANDING:
      let updatedLaunchProgramsLanding = [];
      if (action.wasLandingSuccessful) {
        for (let prog of state.launchPrograms) {
          if (prog.rocket.first_stage.cores[0].land_success) {
            updatedLaunchProgramsLanding.push(prog);
          }
        }
      } else {
        for (let prog of state.launchPrograms) {
          if (!prog.rocket.first_stage.cores[0].land_success) {
            updatedLaunchProgramsLanding.push(prog);
          }
        }
      }

      return {
        ...state,
        launchPrograms: updatedLaunchProgramsLanding,
        successfullLanding: action.wasLandingSuccessful,
      };
    case actionTypes.CLEAR_FILTERS:
      return {
        ...state,
        launchPrograms: state.launchProgramsBackup,
        launchYear: '2006',
        successfullLaunch: null,
        successfullLanding: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
