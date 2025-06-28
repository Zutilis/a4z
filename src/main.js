import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from './router'

import './assets/styles/fonts.css'
import './assets/styles/variables.css'
import './assets/styles/main.css'

const head = createHead()

createApp(App)
	.use(router)
	.use(head)
	.mount('#app')

window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.remove('no-transition')
})