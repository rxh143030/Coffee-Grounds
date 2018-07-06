<template>
    <div class="nav">
        <ul>
            <li v-for="(item,index) in menuItems" :key=item.link >
                <span :style="item.style">
                    <router-link @click.native="highlight(index)" :to=item.link>{{item.title}}</router-link>
                </span>
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
                {icon: '', title: 'Guide', link: '/', style: 'background: #8b6e64;' },
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
                this.menuItems[index].style = 'background: #8b6e64;'
            }            
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
        padding: 0;
    }

    .nav li{
         display:inline;
    }

    .nav span{
        border-radius: 25px;
        padding: 10px 20px;
        margin: 0px 10px;
    }

    .nav a{
        color: #e5e5e5;
        text-decoration: none;
        padding: 10px;
        
        font-size: 1rem;
        font-family: 'Bungee', cursive;
        font-weight: 400;
    }

    .nav a:hover{
        color: white;
    }

    .nav a:hover{
        cursor: pointer;
    }
</style>
