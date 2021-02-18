import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Categories from '../views/Categories.vue'
import Users from '../views/Users.vue'
import Details from '../views/Details.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts', 
    component: Posts
  },
   {
    path: '/categories',
    name: 'Categories', 
    component: Categories
  },
   {
    path: '/users',
    name: 'Users', 
    component: Users
  },
  {
    path: '/details',
    name: 'Details', 
    component: Details
  },
   {
    path: '/profile',
    name: 'Profile', 
    component: Profile
  },
  {
    path: '/settings',
    name: 'Setting', 
    component: Settings
  },
  {
    path: '/login',
    name: 'Login', 
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
