import * as constants from './constants';

const defaultState = {
  login:'false',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN_STATE: {
      const newState = {
        ...state,
        isLogin : action.isLogin
      }
      return newState
    }
    default:
      return state;
  }
};
