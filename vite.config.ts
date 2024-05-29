import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/business-card/',
  resolve: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '$fonts', replacement: path.resolve(__dirname, '/assets/fonts') },
      { find: '$icons', replacement: path.resolve(__dirname, '/assets/icons') },
    ],
  },
});
