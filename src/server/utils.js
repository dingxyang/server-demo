import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import {matchRoutes}  from 'react-router-config';
import routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

export const render = req => {
  const store = getStore();
  // 获取异步数据填充到store
  // 根据请求路由做判断
  const matchedRoutes = matchRoutes(routes, req.path);

  console.log(matchedRoutes);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  );
  return `
     <html>
       <head>
         <title>sst</title>
       </head>
       <body>
         <div id='root'>${content}</div>
         <script src='/index.js'></script>
       </body>
     </html>
     `;
};
