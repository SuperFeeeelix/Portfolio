import ( defineConfig ) from 'vite'
import react from '@vitejs/plugin-react'

export defualt defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    }
});