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
    border-radius: 17px;
    border: 2px solid black;

  }
</style>
