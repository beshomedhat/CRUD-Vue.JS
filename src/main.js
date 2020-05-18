// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import posts from './components/posts'
import home from './components/home'
import post from './components/post'
import createUser from './components/createUser'
import showUser from './components/showUser'
import updateUser from './components/updateUser'
import updatePost from './components/updatePost'
import users from './components/users'
import login from './components/login'
import register from './components/register'
import index from './components/index'
import resources from './components/resources'
import showResource from './components/showResource'


Vue.use(VueRouter);

const routes = [
  {
    path: '/' ,
    component: index
  },
  {
    path: '/home' ,
    component: home
  },
  {
    path: '/updatePost/:id' ,
    component: updatePost
  },
  {
    path: '/post/:id' ,
    component: post
  },
  {
    path: '/posts' ,
    component: posts
  },
  {
    path: '/createUser' ,
    component: createUser
  },
  {
    path: '/showUser/:id' ,
    component: showUser
  },
  {
    path: '/updateUser/:id' ,
    component: updateUser
  },
  {
    path: '/users' ,
    component: users
  },
  {
    path: '/login' ,
    component: login
  },
  {
    path: '/register' ,
    component: register
  },
  {
    path: '/resource/:id' ,
    component: showResource
  },
  {
    path: '/resources' ,
    component: resources
  }
];

const router = new VueRouter({routes: routes});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
