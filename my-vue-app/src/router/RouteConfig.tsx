import { lazy } from "react";
import ImageOne from "../assets/icon/icon1.png";
import ImageTwo from "../assets/icon/icon2.png";
import ImageThree from "../assets/icon/icon3.png";
import ImageFour from "../assets/icon/icon4.png";
import ImageFive from "../assets/icon/icon5.png";
const Login = lazy(() => import("../views/login/loginViews.tsx"));
const HomeIndex = lazy(() => import("../views/home/homeIndex.tsx"));
const WorkIndex = lazy(() => import("../views/work/workIndex.tsx"));
const createIndex = lazy(() => import("../views/create/createIndex.tsx"));
const SetIndex = lazy(() => import("../views/set/setIndex.tsx"));
const MineIndex = lazy(() => import("../views/mine/mineIndex.tsx"));

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
    path: "/create",
    elememt: createIndex,
    meta: {
      pageTitle: "创建设计",
      icon: ImageThree,
    },
  },
  {
    path: "/set",
    elememt: SetIndex,
    meta: {
      pageTitle:"偏好设置",
      icon: ImageFour,
    },
  },
  {
    path: "/mine",
    elememt: MineIndex,
    meta: {
      pageTitle:"我的收藏",
      icon: ImageFive,
    },
  },
  {
    path: "/login",
    elememt: Login,
    meta: {
      pageTitle: "登录",
      icon: "",
    },
  },
];
export default RouterList;
