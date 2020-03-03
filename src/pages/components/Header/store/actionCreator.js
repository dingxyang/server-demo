import * as constants from "./constants";

export const changeLoginState = isLogin => ({
  type: constants.CHANGE_LOGIN_STATE,
  isLogin
});

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/login.json?secret=PP87ANTIPIRATE").then(res => {
      dispatch(changeLoginState(true));
    });
  };
};


