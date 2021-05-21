import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config = {
  server: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({config})],
  server: {
    proxy: {
      '/^api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '/^api': '/' },
      },
    },
  },
})
