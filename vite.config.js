import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 깃헙 저장소 이름
  base: isProd ? '/tictactoe-t2' : '/'
})
