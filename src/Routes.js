import Home from "./pages/Home";
import Translation from "./pages/Translation";
import App from "./App";

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
      }
    ]
  },
]
