import express from "express";
import { render } from "./utils";
import routes from "../Routes";
import { matchRoutes } from "react-router-config";
import {getStore} from "../store";
import proxy from 'express-http-proxy';

const app = express();
app.use(express.static("public"));

app.use('/api',proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api'+req.url;
  }
}));

app.get("*", (req, res) => {
  const store = getStore();
  // 获取异步数据填充到store
  // 根据请求路由做判断
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
});

app.listen(3000);
