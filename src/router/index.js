// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CourseCatalog from '../views/CourseCatalog.vue';
// import CourseDetails from '../views/CourseDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Aboutus.vue'),
  },
  {
    path: '/courses',
    name: 'CourseCatalog',
    component: CourseCatalog,
  },
  {
    path: '/courses/:id',
    component: () => import('../views/CourseDetail.vue'),
    name: 'CourseDetail'
  },
  {
    path: '/enroll/:courseTitle',
    name: 'enroll',
    component: () => import('../views/EnrollPage.vue'),

  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUpPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path:'/Blog',
    name: 'Blog',
    component: () => import('../views/BlogList.vue'),
  },
   {
     path: '/contact',
     name: 'Contact',
     component: () => import('../views/Contactus.vue'),
   },
   {
     path: '/dashboard',
     name: 'Dashboard',
     component: () => import('../views/DashBord.vue'),
     beforeEnter: (to, from, next) => {
       if (sessionStorage.getItem('token')) {
         next();
       } else {
         next({ name: 'Login' });
       }
     },
    
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
