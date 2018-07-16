<template>
    <div class="side-nav">
        <h3>Guide</h3>
        <ul>
            <li v-for="(item , index) in menuItems" :key='index'>
                <router-link :style="item.style" :to='item.link'>{{item.title}}</router-link>
            </li>    
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            menuItems: [
                    {icon: '', title: 'Introduction', link: '/', style: {color: '#6A493E', fontWeight: '700'}},
                    {icon: '', title: 'What is Coffee?', link: '/about', style: ''},
                    {icon: '', title: 'History of Coffee', link: '/history', style: ''},
                    {icon: '', title: 'How To Brew', link: '/brewing', style: ''},
                    {icon: '', title: 'How To Store', link: '/storing', style: ''},
                    {icon: '', title: 'Types of Roasts', link: '/roast', style: ''},
                ]
        }
    }
}
</script>

<style>

    .side-nav ul{
        list-style: none;
        margin-left: 36px;
        border-left: 3px solid #FED953;;
    }

    .side-nav ul li{
        padding: 6px 0px;
    }

    .side-nav h3{
        font-family: 'Roboto', sans-serif; 
        color: #363636;
        padding-left: 62px;
        font-size: 24px;
        margin-bottom: 12px
    }

    .side-nav ul a{
        text-decoration: none;
        font-family: 'Roboto', sans-serif; 
        color: #363636;
        font-weight: 700;
    }

    .side-nav ul a:hover{
        color: #6A493E;
    }
</style>
