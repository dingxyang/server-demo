import express from "express";
import { render } from "./utils";
import routes from "../Routes";
import { matchRoutes } from "react-router-config";
import { getStore } from "../store";
import proxy from "express-http-proxy";

const app = express();
app.use(express.static("public"));

app.use(
  "/api",
  proxy("http://47.95.113.63", {
    proxyReqPathResolver: function(req) {
      return "/ssr/api" + req.url;
    }
  })
);

app.get("*", (req, res) => {
  const store = getStore(req);
  // 获取异步数据填充到store
  // 根据请求路由做判断
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // 不return请求 promises会有空
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, routes, req, context);
    if (context.NOT_FOUND) {
      res.status(404)
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000);
