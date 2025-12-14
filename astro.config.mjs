// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://specialists.am', // Required for sitemap generation
    integrations: [sitemap()]
})
