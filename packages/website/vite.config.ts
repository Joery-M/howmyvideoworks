import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';
import wasm from 'vite-plugin-wasm';

// https://vite.dev/config/
export default defineConfig({
    plugins: [mkcert(), vue(), wasm()]
});
