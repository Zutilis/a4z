import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/fonts.css'
import './assets/styles/variables.css'
import './assets/styles/main.css'

createApp(App).use(router).mount('#app')

window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.remove('no-transition')
})