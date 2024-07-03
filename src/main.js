import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Swal from 'sweetalert2'

const app = createApp(App);

app.use(store);

app.use(router)

store.dispatch('fetchData'); // Fetch data when the app loads

app.mount('#app');

