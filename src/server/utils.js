import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

export const render = req => {

  const store = getStore();
  // 获取异步数据填充到store
  // 根据请求路由做判断

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
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
