/*
 * @Author: 马双庆 3489627692.qq.com
 * @Date: 2024-06-19 20:32:13
 * @LastEditors: 马双庆 3489627692.qq.com
 * @LastEditTime: 2024-06-21 14:16:51
 * @FilePath: /vite+ts+react/my-vue-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Router from "./router/RouteConfig";
import "./App.scss";


function App() {
  //由于路由组件是懒加载的，渲染页面可能会有延迟，
  //所以这里使用Suspense组件来处理，优化交互
  const RouteEleMent = (route : IRouteType.IRouer) : React.ReactNode => {
    if(!route.elememt) {
      return null;
    }
    return (
       <Suspense fallback={<div>loading...</div>}>
           <route.elememt />
       </Suspense>
    )
  };
  //通过每一个路由对象渲染Route
  const RouteItem = (route : IRouteType.IRouer) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={RouteEleMent(route)}
      >
        {RouteList(route.children ?? [])}
      </Route>
    )
  };
  //根据配置的routeconfig生成Route
  const RouteList = (list : IRouteType.IRouer[]) => {
    return list.map((item) => {
      return RouteItem(item);
    });
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {RouteList(Router)}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
