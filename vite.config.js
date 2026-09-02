import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(root, 'apps/web'),
  plugins: [react()],
  resolve: { alias: { '@': path.join(root, 'apps/web/src') } },
  build: { outDir: path.join(root, 'dist/client'), emptyOutDir: true },
});
