import './assets/dist/css/tabler.min.css'
//import './assets/dist/css/tabler-flags.min.css'
import './assets/dist/css/tabler-payments.min.css'
import './assets/dist/css/tabler-vendors.min.css'
import './assets/dist/css/demo.min.css'



import './assets/dist/libs/apexcharts/dist/apexcharts.min.js'
import './assets/dist/libs/jsvectormap/dist/js/jsvectormap.min.js'
import './assets/dist/libs/jsvectormap/dist/maps/world.js'
import './assets/dist/libs/jsvectormap/dist/maps/world-merc.js'

import './assets/dist/js/tabler.min.js'
import './assets/dist/js/demo.min.js'

import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
const app=createApp(App)

import axios from 'axios'
//axios.defaults.baseURL='https://www.vue-js.com/api'
app.config.globalProperties.$http=axios

app.use(router)
app.mount('#app')