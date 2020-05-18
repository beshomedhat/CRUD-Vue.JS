<template>
<div>
<navbar/>
    <div class="container">
    <router-link class="btn btn-outline-primary m-2" :to="'./createUser'" ><i class="fa fa-plus fa-lg"></i> </router-link>
        <table class="table">
                <thead class="thead-dark">
                  <tr>                    
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for= '(post, index) in posts' :key="post.id">                       
                        <td>{{index+1}}</td>
                        <td>{{post.first_name}}</td>
                        <td>{{post.last_name}}</td>                        
                        <td>
                        <router-link :to="'./showUser/'+post.id" ><i class="fa fa-eye"></i> </router-link>
                        <router-link :to="'./updateUser/'+post.id" ><i class="fa fa-edit"></i> </router-link>                        
                        <i @click="deleteUser(post.id)" class="fa fa-trash"></i>
                        </td>
                    </tr>
                </tbody>
              </table>
    </div>
    </div>
</template>

<script>
import navbar from '../components/navbar'
import axios from 'axios'
    export default{
        name: 'users',
        data(){

            return{
                posts:[]

            }
        },
        created(){
            axios.get('https://reqres.in/api/users').then(posts =>{
                
                this.posts=posts.data.data
            })
        },
        methods:{
            deleteUser(id){
                var link = 'https://reqres.in/api/users/'+id
                axios.delete(link)
                .then(response => {
                    alert( 'DELETE and response.status'+ response.status)
                })
            }
        },
        components:{
            navbar
        }
    }
</script>

<style>

</style>