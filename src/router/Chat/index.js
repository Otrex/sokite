import ChatLayout from '../../layout/Chat/ChatLayout.vue';

const routes = [
  {
    path: '/dm',
    component: ChatLayout,
    name: 'Messages',
    meta: {
      requiresAuth: true
    }
  },
];
export default routes;
