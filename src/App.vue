<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components:{
    'Header': Header,
    'Navigation': Navigation
  }
}
</script>


<style>
  #app{
    box-shadow: 0 12px 24px 0 rgba(0,0,0,0.10);
    margin: 20px;
    border-radius: 25.5px;
    border-left: 2px solid #6B493D;
    border-right: 2px solid #6B493D;
    border-bottom: 2px solid #6B493D;

  }
</style>
