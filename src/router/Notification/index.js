import NotificationLayout from '../../layout/Notification/NotificationLayout.vue';
import NotificationSettings from '../../views/Notification/Settings.vue';

const routes = [
  {
    path: '/notifications',
    component: NotificationLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/notifications/settings',
        name: 'Settings',
        component: NotificationSettings,
      },
    ],
  },
];
export default routes;
