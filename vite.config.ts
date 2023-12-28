import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin({

    })
  ],
  server:{
    hmr:true,
    proxy: {
      // 字符串简写写法
    
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: {
      '@' : path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        globalVars: {
          hack: "true; @import '@/style/variables.less';"
        } 
      }
    }
  }
})
