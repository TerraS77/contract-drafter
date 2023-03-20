import { createApp } from 'vue'
import App from './App.vue'
import { anu } from 'anu-vue'

import './assets/main.css'
import './assets/markdown.css'
import './assets/json.css'

// UnoCSS import
import 'uno.css'

// anu styles
import 'anu-vue/dist/style.css'

// default theme styles
import '@anu-vue/preset-theme-default/dist/style.css'

// Using `app.use(anu)` will register all the components globally
createApp(App)
    .use(anu)
    .mount('#app')
