/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 15:17:56
 * @Descripttion:
 * @FilePath: /server-demo/src/index.js
 */
const express = require("express");
const app = express();
const port = 3000;
const Home = require("./containers/Home");

app.get("/", (req, res) =>
  res.send(
    `
    <html>
      <head>
        <title>AAA</title>
      </head>
      <body>
      <p>hello dxy</p>
      </body>
    </html>
    `
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
