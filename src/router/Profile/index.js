import ProfileLayout from '../../layout/Profile/ProfileLayout.vue';
import EditRoute from './Edit/index';

const routes = [
  {
    path: '/profile',
    component: ProfileLayout,
    name: 'Profile',
    meta: {
      requiresAuth: true
    }
  },
  ...EditRoute,
];
export default routes;
