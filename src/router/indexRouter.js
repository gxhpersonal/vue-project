import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from "@/components/detail"

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
