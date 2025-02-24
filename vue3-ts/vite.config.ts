import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import svgicon from 'vite-plugin-svgicon'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  svgicon({
    include: ['**/assets/icons/**/*.svg'],
    svgFilePath: path.join(__dirname, './src/assets/icons'),
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/index.scss";
        `
      }
    }
  },
})
