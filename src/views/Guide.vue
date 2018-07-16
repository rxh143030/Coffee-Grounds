<template>
  <div class="guide">
    <SideNavigation></SideNavigation>
    <router-view/>
  </div>
</template>

<script>
import SideNavigation from '../components/SideNavigation.vue';

export default {
  data: function(){
    return{

    }
  },
  components: {
    'SideNavigation': SideNavigation
  }
}
</script>

<style>
  .guide{
    margin: 64px 0px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
</style>
