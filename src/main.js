import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.all'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
