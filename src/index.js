/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 16:07:17
 * @Descripttion:
 * @FilePath: /server-demo/src/index.js
 */
import express from "express";
import Home from "./containers/Home";
import React from "react";
import { renderToString } from "react-dom/server";

// 客户端渲染
// React代码在浏览器器执行，消耗的是用户浏览器的性能

// 服务器渲染
// React代码在服务器上执行，消耗服务器端的性能

const app = express();
const content = renderToString(<Home />);

app.get("/", (req, res) =>
  res.send(
    `
    <html>
      <head>
        <title>sst</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
    `
  )
);

app.listen(3000);
