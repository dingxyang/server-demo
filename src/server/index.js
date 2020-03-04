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
      const promise  = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      })
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    const context = {
      css:[]
    };
    const html = render(store, routes, req, context);
    // 重定向会有这个值
    if(context.action ==='REPLACE') {
      res.redirect(301,context.url)
    }else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html);
    } else {
      res.send(html);
    }
  })
  // .catch(()=>{
  //   res.send('sorry,error')
  // });
});

app.listen(3000);
