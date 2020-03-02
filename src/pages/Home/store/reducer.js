import * as constants from './constants';

const defaultState = {
  name:'esun',
  newsList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST: {
      const newState = {
        ...state,
        newsList : action.newsList
      }
      return newState
    }
    default:
      return state;
  }
};
