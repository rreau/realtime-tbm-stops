import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': resolve(__dirname, 'src/utils/'),
      '@components': resolve(__dirname, 'src/components/'),
      '@constants': resolve(__dirname, 'src/constants/'),
      '@hooks': resolve(__dirname, 'src/hooks/'),
      '@contexts': resolve(__dirname, 'src/contexts/'),
    },
  },
});
