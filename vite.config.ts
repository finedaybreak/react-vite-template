import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

const pathSrc = resolve(__dirname, 'src');

export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@/': `${pathSrc}/`,
        },
    },
})
