import AuthLayout from '../../layout/Auth/AuthLayout.vue';
import Signin from '../../views/Auth/Signin.vue';
import Signup from '../../views/Auth/Signup.vue';
import Forgot from '../../views/Auth/Forgot.vue';

const routes = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {
        path: '/signin',
        name: 'Sign In',
        component: Signin,
      },
      {
        path: '/signup',
        name: 'Sign Up',
        component: Signup,
      },
      {
        path: '/forgot',
        name: 'Reset Password',
        component: Forgot,
      },
    ],
  },
];
export default routes;
