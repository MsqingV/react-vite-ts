/*
 * @Author: 马双庆 3489627692.qq.com
 * @Date: 2024-06-19 20:32:13
 * @LastEditors: 马双庆 3489627692.qq.com
 * @LastEditTime: 2024-06-20 09:50:32
 * @FilePath: /vite+ts+react/my-vue-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //配置scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/sassConfig.scss";',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
    open:true
  },
})
