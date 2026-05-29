import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Project page is served from https://dino-ctk.github.io/craftEase/
  base: '/craftEase/',
  plugins: [react()],
})
