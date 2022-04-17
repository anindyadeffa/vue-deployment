import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsLayout from "@/layout/NewsLayout.vue";
import NewsView from "@/views/NewsView.vue";
import DetailNewsView from "@/views/DetailNewsView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: NewsLayout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: "",
        name: "News",
        component: NewsView,
      },
      {
        path: ":title",
        name: "DetailNewsView",
        component: DetailNewsView,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
