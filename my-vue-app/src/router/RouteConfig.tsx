import { lazy } from "react";
import ImageOne from "../assets/icon/icon1.png";
import ImageTwo from "../assets/icon/icon2.png";
const Login = lazy(() => import("../views/login/loginViews.tsx"));
const HomeIndex = lazy(() => import("../views/home/homeIndex.tsx"));
const WorkIndex = lazy(() => import("../views/work/workIndex.tsx"));


const RouterList: IRouteType.IRouer[] = [
  {
    path: "/",
    elememt: HomeIndex,
    meta: { pageTitle: "精选推荐", icon: ImageOne },
  },
  {
    path: "/work",
    elememt: WorkIndex,
    meta: {
      pageTitle: "工作台",
      icon: ImageTwo,
    },
  },
  {
    path: "/login",
    elememt: Login,
    meta: {
        pageTitle: "登录",
        icon: ""
    },
  },
];
export default RouterList;
