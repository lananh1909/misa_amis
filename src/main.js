import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VTooltip from 'v-tooltip'
import VCalendar from 'v-calendar';

createApp(App).use(router).use(VCalendar).use(VTooltip).mount('#app')
