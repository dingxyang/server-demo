import React from "react";
import Header from "../src/pages/components/Header/";
import {renderRoutes} from 'react-router-config'
import {actionCreator} from '../src/pages/components/Header/store'

const App = (props) => {
  return (
    <div>
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

App.loadData = (store) => {
  // return 很重要，返回promise
  return store.dispatch(actionCreator.getHeaderInfo())
}

export default App;
