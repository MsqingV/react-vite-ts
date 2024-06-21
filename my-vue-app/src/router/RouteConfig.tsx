
import { lazy } from 'react'
const Login = lazy(() => import('../views/login/loginViews.tsx'));
const HomeIndex = lazy(() => import('../views/home/homeIndex.tsx'));

const Router : IRouteType.IRouer[] = [
    {
        path : '/',
        elememt : HomeIndex,
        meta : {pageTitle : '首页'}
    },
    {
        path : '/login',
        elememt : Login,
        meta : {pageTitle : '登录'}
    },
]
export default Router