<template>
    <div class="nav">
        <ul>
            <li v-for="(item,index) in menuItems" :key='item.link' >
                <router-link :style='item.style' @click.native="highlight(index)" :to='item.link'>{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data: function() {
        return {
            previousIndex: 0,
            menuItems: [
                {icon: '', title: 'Guide', link: '/', style: 'color: white'},
                {icon: '', title: 'Types', link: '/types', style: ''},
                {icon: '', title: 'Find', link: 'find', style: ''}
            ]
        }
    },

    methods: {
        highlight: function(index) {
            if(index != this.previousIndex){
                this.menuItems[this.previousIndex].style = ''
                this.previousIndex = index
                this.menuItems[index].style = 'color: white'
            }            
        }
    },
    
    computed: {
        buttonPress: function(){
            return{
               
            };
        }
    }
}
</script>

<style>

    .nav{
        padding: 24px 0px;
        background: #6B493D;
        text-align: center;
    }

    .nav ul{
        list-style-type: none;
        padding: 16px 0;
    }

    .nav li{
         display:inline;
    }

    .nav a{
        position: relative;

        color: #e5e5e5;
        text-decoration: none;
        padding: 10px 20px;

        background: #8b6e64;
        box-shadow: 0px 4px #391C09;
        border-radius: 10px;
        margin: 0px 16px;
        
        font-size: 1rem;
        font-family: 'Bungee', cursive;
        font-weight: 400;
    }

    .nav a:hover{
        color: white;
        cursor: pointer;
    }

    .nav a:active{
        box-shadow: 0px 1px #391C09;
        top: 3px;
    }

</style>
