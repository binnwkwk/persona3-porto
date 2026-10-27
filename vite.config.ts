
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const spaFallback = (): Plugin => {
  let outDir = 'dist'

  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved: (config) => {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle: () => {
      copyFileSync(
        resolve(outDir, 'index.html'),
        resolve(outDir, '404.html'),
      )
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), spaFallback()],
})
