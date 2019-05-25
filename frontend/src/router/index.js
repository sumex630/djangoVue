import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routers.js'

Vue.use(Router)

export const router = new Router({
    mode:"history",
    routes,
})