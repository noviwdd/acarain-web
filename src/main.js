import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/routes.js'

const app = createApp(App)
app.use(routes)
app.mount('#app')
