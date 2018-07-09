import Vue from 'vue'
import Router from 'vue-router'
import Guide from './views/Guide.vue'
import About from './views/About.vue'
import Types from './views/Types.vue'
import Find from './views/Find.vue'

import welcome from './views/guide-content/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/types',
      name: 'types',
      component: Types
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
  ]
})
