import * as constants from "./constants";
import config from '../../../config'

export const changeTranslationList = data => ({
  type: constants.CHANGE_TRANS_LIST,
  data
});

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/tanslations.json?secret=${config.secret}`).then(res => {
      console.log(res.datat)
      // dispatch(changeHomeList(res.data.data));
    }).catch((err)=>{
      dispatch(changeTranslationList([{title:'11'},{title:'123123123'}]));
    });
  };
};
