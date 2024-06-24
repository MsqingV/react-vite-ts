/*
 * @Author: 马双庆 3489627692.qq.com
 * @Date: 2024-06-20 08:35:56
 * @LastEditors: 马双庆 3489627692.qq.com
 * @LastEditTime: 2024-06-24 20:18:38
 * @FilePath: /vite+ts+react/my-vue-app/src/router/router.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace IRouteType {
    interface IMeta {
        pageTitle:string;
        icon:string
    }
    interface IRouer {
        path:string;
        elememt:React.LazyExoticComponent<() => JSX.Element>;
        meta:IMeta;
        children?:IRouer[];
        
    }
}