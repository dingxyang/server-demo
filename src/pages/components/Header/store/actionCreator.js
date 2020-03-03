import * as constants from "./constants";
import config from '../../../../config'
export const changeLoginState = value => ({
  type: constants.CHANGE_LOGIN_STATE,
  value
});

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/isLogin.json?secret=${config.secret}`).then(res => {
      dispatch(changeLoginState(res.data.data.login));
    });
  };
}


export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/login.json?secret=${config.secret}`).then(res => {
      dispatch(changeLoginState(true));
    });
  };
};

export const loginout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/logout.json?secret=${config.secret}`).then(res => {
      dispatch(changeLoginState(false));
    });
  };
};


