import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'

import NavBar from './components/NavBar.vue'
import DatasetForm from './components/DatasetForm.vue'
import MandatoryMetadata from './components/MandatoryMetadata.vue'
import AdditionalMetadata from './components/AdditionalMetadata.vue'

// Services
Vue.use(Element, { locale })

// Components
Vue.component('NavBar', NavBar)
Vue.component('DatasetForm', DatasetForm)
Vue.component('MandatoryMetadata', MandatoryMetadata)
Vue.component('AdditionalMetadata', AdditionalMetadata)

new Vue({
  el: '#app',
  render: h => h(App)
})
