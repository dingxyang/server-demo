import * as constants from './constants';
import axios from 'axios';
export const changeHomeList = (newsList) =>({
    type:constants.CHANGE_HOME_LIST,
    newsList
})

export const getHomeList = (server) => {
    // 浏览器 /api/news.json = http://localhost:3000/api/news.json
    // 服务器 /api/news.json = 服务器根目录/api/news.json
    let url;
    // 服务端
    if(server) {
        url= 'http://localhost:8080/ssr/api/news.json'
    }
    else {
        url = '/api/news.json'
    }
    return (dispatch) => {
        return axios.get(url)
        .then((res) => {
            dispatch(changeHomeList(res.data.data))
        })
    }
}