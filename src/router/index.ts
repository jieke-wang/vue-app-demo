import { getRouterList } from '@/http/api';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 路由守卫
router.beforeEach(async (to) => {
  let token = localStorage.getItem('token');
  if (!token && to.path != '/login') return '/login';
  else if (!router.hasRoute('Info')) {
    let list = await getRouterList();
    let listData = (list as any) as Array<any>;
    listData.forEach(v => {
      router.addRoute("Home", {
        ...v,
        component: function () {
          return import(/* webpackChunkName: "password" */ `../views/${v.name}.vue`)
        }
      });
    });

    if (to.path == '/login' && token) return '/';
    else router.replace(to.path);
  }
});

export default router
