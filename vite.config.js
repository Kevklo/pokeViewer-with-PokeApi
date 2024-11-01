import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://kevklo.github.io/pokeViewer-with-PokeApi",
  build: {
    rollupOptions: {
      external: [],
    }
  }
})
