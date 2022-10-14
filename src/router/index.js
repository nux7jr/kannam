import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
// import ProfileView from '@/views/ProfileView.vue'
import ExaminationInfoView from "@/views/ExaminationInfoView.vue"

// import ProfileView from '@/views/ProfileView.vue'
// import ProfileView from '@/views/ProfileView.vue'
// import ProfileView from '@/views/ProfileView.vue'
// import ProfileView from '@/views/ProfileView.vue'
// import ProfileView from '@/views/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/examination-info',
    name: 'ExaminationInfoView',
    component: ExaminationInfoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
