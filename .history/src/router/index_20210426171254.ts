import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'


const Body = () => import('@/views/body/Body.vue')
const Home = () => import('@/views/main/home/Home.vue')
const Search = () => import('@/views/main/search/Search.vue')
const Order = () => import('@/views/main/order/Order.vue')
const Me = () => import('@/views/main/mine/Me.vue')


const Nearest = () => import('@/views/main/home/content/Nearest.vue')

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Body,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        children: [
          {
            path: "/nearest",
            component: Nearest
          }
        ]
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/order',
        component: Order
      },
      {
        path: '/mine',
        component: Me
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router