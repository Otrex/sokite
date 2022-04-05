import HomeLayout from '../../layout/Home/HomeLayout.vue';
import Home from '../../views/Home/Home.vue';
import CreatePostMobile from '../../views/Home/CreatePostMobile.vue';
import GFTV from '../../views/GFTV/GFTV.vue';

const routes = [
  {
    path: '/',
    component: HomeLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/create',
        name: 'CreatePostMobile',
        component: CreatePostMobile,
      },
      {
        path: '/gf-tv',
        name: 'GF TV',
        component: GFTV,
      },
    ],
  },
];
export default routes;
