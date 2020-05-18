<template>
<div>
        <div class="container m-5 py-5">
    <h1 style="font-size: 100px;"><span style="color: #ff305b;">VUE</span>  Project</h1>
</div>
<div class="container m-5 pb-5">
    
    <router-link class="btn btn-outline-danger py-2 px-5 mx-3" :to="'./login'" >Login</router-link>

    <router-link class="btn btn-outline-danger py-2 px-5 mx-3" :to="'./register'" >Sign Up</router-link>
</div>
</div>
</template>

<script>

import axios from 'axios';
    export default{
        name: 'home',
        data(){

            return{
                posts:[]

            }
        }        
    }
</script>

<style>

</style>