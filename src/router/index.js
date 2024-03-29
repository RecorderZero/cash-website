/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: '/index',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/pages/index.vue'),
      },
    ],
  },
  {
    path: '/news',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'News',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "news" */ '@/pages/news.vue'),
      },
    ],
  },
  {
    path: '/project',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Project',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "project" */ '@/pages/project.vue'),
      },
    ],
  },
  {
    path: '/service',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "service" */ '@/pages/service.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/pages/about.vue'),
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue'),
      },
    ],
  },
  {
    path: '/forgotPassword',
    // component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    // children: [
    //   {
    //     path: '',
         name: 'ForgotPassword',
        component: () => import(/* webpackChunkName: "forgotPassword" */ '@/pages/forgotPassword.vue'),
    //   },
    // ],
  },
  // {
  //   path: '/otp',
  //   name: 'OTP',
  //   component: () => import(/* webpackChunkName: "otp" */ '@/pages/otp.vue'),
  // },
  // {
  //   path: '/resetPassword',
  //   name: 'ResetPassword',
  //   component: () => import(/* webpackChunkName: "resetPassword" */ '@/pages/resetPassword.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
