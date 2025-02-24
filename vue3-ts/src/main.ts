import { createApp } from 'vue'
import App from './App.vue'

import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

let app = createApp(App);
app.use(VueSvgIconPlugin, { tagName: 'icon' })

// Global component
app.mount('#app')
