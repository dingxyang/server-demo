import * as constants from './constants';
import axios from 'axios';
export const changeHomeList = (newsList) =>({
    type:constants.CHANGE_HOME_LIST,
    newsList
})

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/news.json')
        .then((res) => {
            dispatch(changeHomeList(res.data.data))
        })
    }
}