import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as homeReducer} from '../pages/Home/store';
import {reducer as headerReducer} from '../pages/components/Header/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers(
  {
    home:homeReducer,
    header:headerReducer
  }
)

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
  const defaultState = window.content.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};

