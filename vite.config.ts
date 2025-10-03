import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',   // 👈 repo name here
  plugins: [react()],
})


// export default defineConfig({
//   base: "/portfolio/",
//   plugins: [react()],
// })