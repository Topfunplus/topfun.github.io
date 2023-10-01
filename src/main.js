import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'jquery/dist/jquery.min'

import 'bootstrap/dist/css/bootstrap.css'

//导入css动画库
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core'




Vue.use(VueAnimXYZ)


Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')