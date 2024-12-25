import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                index: "index.html",
                hello: "hello.html",
                counter: "counter.html",
                say_hello: "say-hello.html",
                style: "style.html",
                score: "score.html",
                todolist: "todolist.html",
                contact: "contact.html",
            }
        }
    }
})
