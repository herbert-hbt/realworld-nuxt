import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7910460 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _260c2df6 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _9b08fffa = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _4a7b487a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _0ec92d49 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _df2eb7da = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _7ce6c1e0 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _c7910460,
    children: [{
      path: "/",
      component: _260c2df6,
      name: "home"
    }, {
      path: "/login",
      component: _9b08fffa,
      name: "login"
    }, {
      path: "/register",
      component: _9b08fffa,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4a7b487a,
      name: "profile"
    }, {
      path: "/settings",
      component: _0ec92d49,
      name: "settings"
    }, {
      path: "/editor",
      component: _df2eb7da,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _7ce6c1e0,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
