import Vue from 'vue'
import Router from 'vue-router'
import Guide from './views/Guide.vue'
import Types from './views/Types.vue'
import Find from './views/Find.vue'

import Welcome from './views/guide-content/Welcome.vue'
import History from './views/guide-content/History.vue'
import About from './views/guide-content/About.vue'
import Brew from './views/guide-content/How_To_Brew.vue'
import Roast from './views/guide-content/Roast_Guide.vue'
import Store from './views/guide-content/How_To_Store.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Guide,
      children: [
        {path: '', component: Welcome},
        {path: 'history', component: History },
        {path: 'about', component: About},
        {path: 'brewing', component: Brew},
        {path: 'roast', component: Roast},
        {path: 'storing', component: Store},
      ]
    },
    {
      path: '/types',
      component: Types
    },
    {
      path: '/find',
      component: Find
    },
  ]
})
