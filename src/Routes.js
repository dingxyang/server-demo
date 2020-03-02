import Home from "./pages/Home";
import Login from "./pages/Login";

export default [
  {
    path:"/",
    component:Home,
    exact: true,
    loadData:Home.loadData,
    key:'home',
    // routes: [
    //   {
    //     path:"/tt",
    //     component:Login,
    //     exact: true,
    //     key:'tt'
    //   }
    // ]
  },
  {
    path:"/login",
    component:Login,
    exact: true,
    key:'login'
  }
]
