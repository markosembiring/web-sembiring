import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan baris ini untuk GitHub Pages
  base: '/web-sembiring/' // Ganti 'web-sembiring' dengan nama repositori Anda
})