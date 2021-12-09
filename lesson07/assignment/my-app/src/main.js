import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.component('nav', {
    template: ''
})

new Vue({
    render: h => h(App),

}).$mount('#app')