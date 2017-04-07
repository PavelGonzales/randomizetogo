import Vue from 'vue';
import Router from 'vue-router';
import Randomize from '@/components/Randomize';
import events from '@/components/events';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'randomize',
      component: Randomize,
    },
    {
      path: '/events',
      name: 'events',
      component: events,
    },
  ],
});
