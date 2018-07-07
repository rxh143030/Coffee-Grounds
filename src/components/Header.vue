<template>
    <div class="head">
        <div>
            <h1>COFFEE-GROUNDS</h1>
            <h3>A Guide To Coffee</h3>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .head h1, h3{
        color: white;
    }

    .head{
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        position: relative;
        height: 400px;
        background: #6B493D;
        text-align: center;
    }

    .head div{
        position: relative;
        top: 50%;
        transform: translateY(-25%); 
    }

    .head h1{
        text-shadow: 4px 4px #391C09;
        font-family: 'Bungee', cursive;
        font-weight: 400;
        font-size: 3.75rem;
        margin: 0px 0px 32px;
    }

    .head h3{
        font-family: 'Bungee', cursive;
        font-weight: 400;
    }
</style>
