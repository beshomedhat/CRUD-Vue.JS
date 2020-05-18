<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class=" mx-3 nav-item">
                <router-link :to="'../resources'" >Resources</router-link>
            </li>

            <li class="nav-item mx-3">
                <router-link :to="'../users'" >Users</router-link>
            </li>
          
          </ul>
      </div>
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
        }
        
    }
</script>

<style>

</style>