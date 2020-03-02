import * as constants from "./constants";

export const changeHomeList = newsList => ({
  type: constants.CHANGE_HOME_LIST,
  newsList
});

export const getHomeList = () => {
  // 浏览器 /api/news.json = http://localhost:3000/api/news.json
  // 服务器 /api/news.json = 服务器根目录/api/news.json
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/news.json?secret=PP87ANTIPIRATE").then(res => {
      dispatch(changeHomeList(res.data.data));
    });
  };
};
