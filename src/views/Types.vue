<template>
  <div class="type">
    <div class="type-container">
      <div class="card">
        <a href="#"><h3>container 1</h3></a>
      </div>
      <div class="card">
        <a href="#"><h3>container 2</h3></a>
        
      </div>
      <div class="card">
        <a href="#"><h3>container 3</h3></a>
      </div>
      <div class="card">
        <a href="#"><h3>container 4</h3></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{

    }
  }  
}
</script>

<style>

  .card {
    background: green;
  }

  .type {
    text-align: center;
    margin: 64px 0px;
  }

  .type-container{
    background: blue;
    margin: 0px auto;
    max-width: 960px;

    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
