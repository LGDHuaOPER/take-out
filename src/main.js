// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
// 此文件供main.js依赖所有公共样式
import 'common/stylus/index.styl';
// import 'common/stylus/icon.styl';
// import 'common/stylus/base.styl';
// 注册
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

// 使用vue-router就不可以用下面方式
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {App},
//   template: '<App/>'
// });

// let app = Vue.extend(App);
// 1、定义（路由）组件，上面已经import

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

// 3. 创建 router 实例，然后传 `routes` 配置，你还可以传别的配置参数
const router = new VueRouter({
  // 默认值 v-link-active
  linkActiveClass: 'active',
  routes
});

// 4. 创建和挂载根实例。通过 router 配置参数注入路由，让整个应用都有路由功能
/* const app = */
new Vue({
  router,
  components: {App},
  template: '<App/>'
}).$mount('#app');

router.push('/goods');
