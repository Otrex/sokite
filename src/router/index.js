import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import HomeRoutes from './Views/index';
import AuthRoutes from './Auth/index';
import ChatRoutes from './Chat/index';
import NotificationRoutes from './Notification/index';
import ProfileRoutes from './Profile/index';

Vue.use(VueRouter);

const routes = [
  ...HomeRoutes,
  ...AuthRoutes,
  ...ChatRoutes,
  ...NotificationRoutes,
  ...ProfileRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["auth/isLoggedIn"]) {
      next()
      return
    }
    next('/signin')
  } else {
    next()
  }
})

export default router;
