import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// Then, in your svelte.config.js
//import switchCase from 'svelte-switch-case';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  //preprocess: [switchCase()]
})
