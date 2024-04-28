/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

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
        name: 'NewsOverview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "newsOverview" */ '@/pages/newsOverview.vue'),
      },
    ],
  },
  {
    path: '/news/:id',
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
    path: '/projects',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'ProjectsOverview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "projectsOverview" */ '@/pages/projectsOverview.vue'),
      },
    ],
  },
  {
    path: '/projects/:id',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "projects" */ '@/pages/projects.vue'),
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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
