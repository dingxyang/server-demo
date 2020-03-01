/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 13:54:01
 * @Descripttion:
 * @FilePath: /server/app.js
 */
const express = require("express");
const app = express();
const port = 3000;

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
