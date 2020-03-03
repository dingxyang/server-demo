import * as constants from './constants';

const defaultState = {
  tanslationsList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_TRANS_LIST: {
      const newState = {
        ...state,
        tanslationsList : action.data
      }
      return newState
    }
    default:
      return state;
  }
};
