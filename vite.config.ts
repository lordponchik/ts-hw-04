import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ts-hw-04/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        page1: 'src/html/task-01.html',
        page2: 'src/html/task-02.html',
      },
    },
  },
});
