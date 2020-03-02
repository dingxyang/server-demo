import * as constants from "./constants";
import clientAxios from "../../../client/request";
import serverAxios from "../../../server/request";

export const changeHomeList = newsList => ({
  type: constants.CHANGE_HOME_LIST,
  newsList
});

export const getHomeList = server => {
  // 浏览器 /api/news.json = http://localhost:3000/api/news.json
  // 服务器 /api/news.json = 服务器根目录/api/news.json
  const request = server ? serverAxios : clientAxios;
  return dispatch => {
    return request.get("/api/news.json").then(res => {
      dispatch(changeHomeList(res.data.data));
    });
  };
};
