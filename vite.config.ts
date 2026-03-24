import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    {
      name: 'treat-js-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.includes('node_modules') && id.endsWith('.js')) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' })
        }
      },
    },
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react({ include: /\.(jsx?|tsx?)$/ }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})
