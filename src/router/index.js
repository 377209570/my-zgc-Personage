import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyMine from '../views/centreContent/MyMine.vue'//个人资料
import Test1 from '../views/centreContent/Test1.vue'//全球热点
import Test2 from '../views/centreContent/Test2.vue'//地图
import Photo from '../views/centreContent/Photo.vue'//相册
import Movie from '../views/centreContent/Movie.vue'//电影
import Atlas from '../views/centreContent/Atlas.vue'//电影

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/myMine',
        name: '个人资料',
        component: MyMine
      },
      {
        path: '/test1',
        name: '全球热点',
        component: Test1
      },
      {
        path: '/test2',
        name: '地图',
        component: Test2
      },
      {
        path: '/photo',
        name: '相册',
        component: Photo
      },
      {
        path: '/movie',
        name: '相册',
        component: Movie
      },
      {
        path: '/atlas',
        name: '地图',
        component: Atlas
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
