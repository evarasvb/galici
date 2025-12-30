import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto le dice a Vite que el sitio vive en /galici/ y no en la raíz
  // Si tu repositorio se llama diferente, cambia 'galici' por el nombre exacto del repo
  base: '/galici/',
})
