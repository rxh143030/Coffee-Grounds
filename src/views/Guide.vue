<template>
  <div class="guide">
    <SideNavigation></SideNavigation>
    <div class="guide-view">
      <router-view/>
    </div>
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
    margin: 72px 0px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .guide-view div{
    padding: 0px 36px;
    max-width: 700px;
  }

  .guide-view h1{
    font-family: 'Bungee', cursive;
    font-weight: 400;
    text-align: center;
    margin-bottom: 24px;
  }

  .guide-view hr{
    margin: 8px 0;
    color: #363636;    
  }

  .guide-view p{
    margin: 16px 0px 0px;
    font-family: 'Roboto', sans-serif; 
    line-height: 1.6em;
    font-size: 15px;
    color: #363636;
  }

  .guide-view img{
    display: block;
    margin: 0px auto 24px;
    width: 50%;

    width: 70px;
  }

  .guide-view h3{
    font-size: 16px;
    color: #363636; 
    font-family: 'Roboto', sans-serif; 
    font-weight: 700;
    margin: 16px 0px 8px;
  }
</style>
