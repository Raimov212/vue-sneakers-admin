import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebase } from './api/firebase'

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(firebase as any)

app.config.performance = true

app.mount('#app')
