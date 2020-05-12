/**接口规范
 * {
 *  status:0,
 *  data:[],
 * msg:''
 * }
 */

import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';     //后端前端域名同，写定的域名网址，使用接口代理，可以使用/api这种;/a/b:/api/a/b=>/a/b
axios.defaults.timeout = 8000; //8s
//接口错误拦截

axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){   //状态码成功
    return res.data;
  }else if(res.status == 10){   //根据状态码进行错误显示，此处10代表未登录
    window.location.href  = '/#/login';//哈希路由
  }else{
    alert(res.msg);
  }
});
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
