import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'

const alias = location => resolve(__dirname, location);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  head: {
    title: 'Pokedex',
    htmlAttrs: {
      lang: 'pt'
    }
  },

  alias:
  {
    '@components': alias('./components'),
    '@views': alias('./pages'),
    '@assets': alias('./assets'),
    '@styles': alias('./assets/scss'),
    '@videos': alias('./assets/videos'),
    '@images': alias('./assets/images'),
    '@mixins': alias('./mixins'),
  },

})
