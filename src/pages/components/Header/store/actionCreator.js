import * as constants from "./constants";

export const changeLoginState = value => ({
  type: constants.CHANGE_LOGIN_STATE,
  value
});

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/isLogin.json?secret=PP87ANTIPIRATE").then(res => {
      dispatch(changeLoginState(res.data.data.login));
    });
  };
}


export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/login.json?secret=PP87ANTIPIRATE").then(res => {
      dispatch(changeLoginState(true));
    });
  };
};

export const loginout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/logout.json?secret=PP87ANTIPIRATE").then(res => {
      dispatch(changeLoginState(false));
    });
  };
};


