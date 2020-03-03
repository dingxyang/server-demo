import Home from "./pages/Home";
import App from "./App";
import Translation from "./pages/Translation";
import NotFound from "./pages/Exception/404";

export default [
  {
    path:"/",
    component:App,
    loadData:App.loadData,
    routes: [
      {
        path:"/",
        component:Home,
        exact: true,
        loadData:Home.loadData,
        key:'home'
      },
      {
        path:"/translation",
        component:Translation,
        exact: true,
        loadData:Translation.loadData,
        key:'translation'
      },
      {
        component:NotFound
      }
    ]
  },
]
