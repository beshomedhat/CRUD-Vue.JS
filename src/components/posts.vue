<template>
<div>
<navbar/>
    <div class="container">
        <table class="table">
                <thead class="thead-dark">
                  <tr>
                    
                    <th>#</th>
                    <th>ID</th>
                    <th>Body</th>
                    <th>Title</th>
                    <th>UserID</th>
                    
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for= '(post, index) in posts' :key="post.id">                       
                        <td>{{index+1}}</td>
                        <td>{{post.id}}</td>
                        <td>{{post.body}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.userId}}</td>
                        
                        <td>
                        <router-link :to="'./post/'+post.id" ><i class="fa fa-eye"></i> </router-link>
                        <router-link :to="'./updatePost/'+post.id" ><i class="fa fa-edit"></i> </router-link>
                        
                        <i class="fa fa-trash"></i>
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
        name: 'postsExample',
        data(){

            return{
                posts:[]

            }
        },
        created(){
            axios.get('https://jsonplaceholder.typicode.com/posts').then(posts =>{
                
                this.posts=posts.data
                console.log(this.posts);

              
            })
        },
        components:{
            navbar
        }
    }
</script>

<style>

</style>