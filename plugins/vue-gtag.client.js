// https://paulund.medium.com/add-google-analytics-to-nuxt3-app-5cbd20d40f28
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-7L339H9YR9'
    }
  })
})
