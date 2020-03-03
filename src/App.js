import React from "react";
import Header from "../src/pages/components/Header/";
import {renderRoutes} from 'react-router-config'
const App = (props) => {
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
