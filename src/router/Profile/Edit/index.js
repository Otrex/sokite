import EditProfile from '../../../layout/Profile/EditProfile.vue';

const routes = [
  {
    path: '/profile/edit',
    component: EditProfile,
    name: 'Edit Profile',
    meta: {
      requiresAuth: true
    }
  },
];
export default routes;
