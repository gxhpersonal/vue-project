import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/Home')
const Detail = () => import("../components/detail/detail")

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
