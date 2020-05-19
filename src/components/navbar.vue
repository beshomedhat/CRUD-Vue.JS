<template>


<nav class="nav nav-pills nav-fill">
  <router-link style="font-size: 26 px; font-weight: bold" class="nav-item  btn-primary py-3" :to="'../resources'" >Resources</router-link>
  <router-link style="font-size: 26 px; font-weight: bold" class="nav-item  btn-danger py-3" :to="'../users'" >Users</router-link>
</nav>

</template>

<script>
import axios from 'axios'
    export default{
        name: 'navbar',
        data(){

            return{
                posts:[]

            }
        },
        methods:{
            
        }
        
    }
</script>

<style>

</style>