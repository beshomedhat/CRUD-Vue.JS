<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item mx-4">
            <router-link style="color: white; font-weight: bold;" class="nav-link" :to="'../resources'" >Resources</router-link>
          </li>  
          <li class="nav-item mx-4">
            <router-link style="color: white; font-weight: bold;" class="nav-link" :to="'../users'" >Users</router-link>
          </li>
          <li class="nav-item mx-4">
            <a style="cursor: pointer; color: white; font-weight: bold;" @click="logout()" class="nav-link" >Logout</a>
          </li>
      
        </ul>
      </div>
    </nav>


</div>


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
            logout(){
                localStorage.removeItem("loginToken");               
                this.$router.push('../login');               
            }
        }
        
    }
</script>

<style>

</style>