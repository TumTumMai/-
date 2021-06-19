import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c33df14 = () => interopDefault(import('..\\pages\\address.vue' /* webpackChunkName: "pages/address" */))
const _4b11cb7a = () => interopDefault(import('..\\pages\\Chat_with_Sales.vue' /* webpackChunkName: "pages/Chat_with_Sales" */))
const _b752d954 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _16cdbf56 = () => interopDefault(import('..\\pages\\confirmpayment.vue' /* webpackChunkName: "pages/confirmpayment" */))
const _73d91ec8 = () => interopDefault(import('..\\pages\\Livestream.vue' /* webpackChunkName: "pages/Livestream" */))
const _068a7209 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4d9023dc = () => interopDefault(import('..\\pages\\mycart.vue' /* webpackChunkName: "pages/mycart" */))
const _227b1c26 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _3145039a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _a43b1f54 = () => interopDefault(import('..\\pages\\unkonw.vue' /* webpackChunkName: "pages/unkonw" */))
const _113bed0a = () => interopDefault(import('..\\pages\\categories\\food.vue' /* webpackChunkName: "pages/categories/food" */))
const _542a3fb8 = () => interopDefault(import('..\\pages\\categories\\technology.vue' /* webpackChunkName: "pages/categories/technology" */))
const _2b3a3630 = () => interopDefault(import('..\\pages\\categories\\vehicle.vue' /* webpackChunkName: "pages/categories/vehicle" */))
const _1108b0dc = () => interopDefault(import('..\\pages\\event\\booth\\_BrochureName.vue' /* webpackChunkName: "pages/event/booth/_BrochureName" */))
const _0fb637be = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _19a329f1 = () => interopDefault(import('..\\pages\\content\\_id.vue' /* webpackChunkName: "pages/content/_id" */))
const _523f83c8 = () => interopDefault(import('..\\pages\\event\\_boothName.vue' /* webpackChunkName: "pages/event/_boothName" */))
const _0b84187e = () => interopDefault(import('..\\pages\\categories\\_categoryname\\_id.vue' /* webpackChunkName: "pages/categories/_categoryname/_id" */))
const _3ce2cef2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _2c33df14,
    name: "address"
  }, {
    path: "/Chat_with_Sales",
    component: _4b11cb7a,
    name: "Chat_with_Sales"
  }, {
    path: "/checkout",
    component: _b752d954,
    name: "checkout"
  }, {
    path: "/confirmpayment",
    component: _16cdbf56,
    name: "confirmpayment"
  }, {
    path: "/Livestream",
    component: _73d91ec8,
    name: "Livestream"
  }, {
    path: "/login",
    component: _068a7209,
    name: "login"
  }, {
    path: "/mycart",
    component: _4d9023dc,
    name: "mycart"
  }, {
    path: "/payment",
    component: _227b1c26,
    name: "payment"
  }, {
    path: "/register",
    component: _3145039a,
    name: "register"
  }, {
    path: "/unkonw",
    component: _a43b1f54,
    name: "unkonw"
  }, {
    path: "/categories/food",
    component: _113bed0a,
    name: "categories-food"
  }, {
    path: "/categories/technology",
    component: _542a3fb8,
    name: "categories-technology"
  }, {
    path: "/categories/vehicle",
    component: _2b3a3630,
    name: "categories-vehicle"
  }, {
    path: "/event/booth/:BrochureName?",
    component: _1108b0dc,
    name: "event-booth-BrochureName"
  }, {
    path: "/categories/:id?",
    component: _0fb637be,
    name: "categories-id"
  }, {
    path: "/content/:id?",
    component: _19a329f1,
    name: "content-id"
  }, {
    path: "/event/:boothName?",
    component: _523f83c8,
    name: "event-boothName"
  }, {
    path: "/categories/:categoryname?/:id?",
    component: _0b84187e,
    name: "categories-categoryname-id"
  }, {
    path: "/",
    component: _3ce2cef2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
