/*
 * @Author: Yang
 * @Date: 2020-03-01 13:51:15
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 17:11:13
 * @Descripttion:
 * @FilePath: /server-demo/src/server/index.js
 */
import express from "express";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(3000);
