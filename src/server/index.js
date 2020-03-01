/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 17:00:15
 * @Descripttion:
 * @FilePath: /server-demo/src/server/index.js
 */
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
// 客户端渲染
// React代码在浏览器器执行，消耗的是用户浏览器的性能

// 服务器渲染
// React代码在服务器上执行，消耗服务器端的性能

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  );
  res.send(
    `
    <html>
      <head>
        <title>sst</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
    `
  );
});

app.listen(3000);
