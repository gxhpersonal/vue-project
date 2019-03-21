import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/Home')
const Detail = () => import("../components/detail/detail")
const Mock = () => import("../components/mock/mock")

Vue.use(Router)

export default new Router({
  // mode: "history",
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
    },
    {
      path:'/mock',
      name:'mock',
      component:Mock
    }
  ]
})
