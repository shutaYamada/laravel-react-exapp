import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        reactRefresh(),
        react({
            jsxImportSource: '@emotion/react',
        }),
        laravel({
            input: [
                'resources/css/app.scss',
                'resources/ts/index.tsx'
            ],
            refresh: true,
        }),
    ],
});