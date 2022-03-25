import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

const pathSrc = resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@/': `${pathSrc}/`,
        },
    },
})
