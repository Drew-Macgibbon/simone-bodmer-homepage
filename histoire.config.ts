import { defineConfig } from "histoire";
import { HstNuxt } from "@histoire/plugin-nuxt"
import { HstVue } from '@histoire/plugin-vue'


export default defineConfig({
  plugins: [
    HstVue(),
    HstNuxt(),
  ],
  theme: {
    title: "Acme Inc.",
    // logo: {
    //   square: './img/square.png',
    //   light: './img/light.png',
    //   dark: './img/dark.png'
    // },
    // logoHref: 'https://acme.com',
    // favicon: './favicon.ico',
  },
});
