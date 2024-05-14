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
    redirect: "/%E9%A6%96%E9%A0%81",
  },
  {
    // 首頁
    path: '/%E9%A6%96%E9%A0%81',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "index" */ '@/pages/index.vue'),
      },
    ],
  },
  {
    // 服務項目
    path: '/%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Technology',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "technology" */ '@/pages/technology.vue'),
      },
    ],
  },
  {
    // 最新消息
    path: '/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/category/:category',
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
    // 最新消息
    path: '/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/details/:id',
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
    // 工程實績
    path: '/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'ProjectsCategory',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "projectsCategory" */ '@/pages/projectsCategory.vue'),
      },
    ],
  },
  {
    // 工程實績
    path: '/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE/category/:category',
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
    // 工程實績
    path: '/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE/details/:id',
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
    // 關於開巨/公司簡介
    path: '/%E9%97%9C%E6%96%BC%E9%96%8B%E5%B7%A8/%E5%85%AC%E5%8F%B8%E7%B0%A1%E4%BB%8B',
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
    // 關於開巨/歷年獲獎
    path: '/%E9%97%9C%E6%96%BC%E9%96%8B%E5%B7%A8/%E6%AD%B7%E5%B9%B4%E7%8D%B2%E7%8D%8E',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Award',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "award" */ '@/pages/award.vue'),
      },
    ],
  },
  {
    // 關於開巨/人力資源
    path: '/%E9%97%9C%E6%96%BC%E9%96%8B%E5%B7%A8/%E4%BA%BA%E5%8A%9B%E7%B5%84%E6%88%90',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Resource',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "resource" */ '@/pages/resource.vue'),
      },
    ],
  },
  {
    // 聯絡我們
    path: '/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
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
    // 永續發展
    path: '/%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95/:page',
    component: () => import('@/layouts/sandwich/SandwichLayout.vue'),
    children: [
      {
        path: '',
        name: 'Esg',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '@/pages/esg.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
