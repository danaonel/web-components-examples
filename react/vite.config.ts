import react from '@vitejs/plugin-react'
import { defineConfig, esmExternalRequirePlugin } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    esmExternalRequirePlugin({
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    }),
  ],
})
