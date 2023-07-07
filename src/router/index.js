import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFoundView.vue'),
    name: 'NotFound'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ywateams',
    name: 'ywateams',
    component: () => import(/* webpackChunkName: "ywateam" */ '../views/OurTeam.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import(/* webpackChunkName: "mission" */ '../views/MissionVision.vue')
  },
  {
    path: '/training',
    name: 'training',
    component: () => import(/* webpackChunkName: "training" */ '../views/AboutTraining.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ '../views/ClientView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/JobView.vue')
  },
  {
    path: '/OurIndustries',
    name: 'OurIndustries',
    component: () => import(/* webpackChunkName: "OurIndustries" */ '../views/OurIndustriesView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactUsView.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
