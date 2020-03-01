/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 15:48:17
 * @Descripttion:
 * @FilePath: /server-demo/src/index.js
 */
import express from "express";
const app = express();
const port = 3000;
import Home from "./containers/Home";
import React from "react";
import { renderToString } from "react-dom/server";

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
