<template>
<div >
<navbar/>
    <div class="container my-4">
    <center><h1>Resources</h1></center>
        <table class="table mt-4">
                <thead class="thead-dark">
                  <tr>
                    
                    <th>#</th>
                    <th>ID</th>
                    <th>Color</th>
                    <th>Name</th>
                    <th>PantoneValue</th>
                    <th>Year</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for= '(post, index) in posts' :key="post.id">                       
                        <td>{{index+1}}</td>
                        <td>{{post.id}}</td>
                        <td>{{post.color}}</td>
                        <td>{{post.name}}</td>
                        <td>{{post.pantone_value}}</td>
                        <td>{{post.year}}</td>
                        <td>
                        <router-link :to="'./resource/'+post.id" ><i class="fa fa-eye"></i> </router-link>
                        
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
        name: 'resources',
        data(){

            return{
                posts:[]

            }
        },
        created(){
            axios.get('https://reqres.in/api/unknown').then(posts =>{
                
                this.posts=posts.data.data
                console.log(this.posts);

              
            })
        },
        components:{
            navbar
        },
        methods:{
            deleteUser(id){
                var link = 'https://reqres.in/api/users/'+id
                axios.delete(link)
                .then(response => {
                    alert( 'DELETE and response.status'+ response.status)
                })
            },
            accessPage(){
                if(localStorage.getItem("loginToken") ==null)
                {
                    this.$router.push('../login');
                }
            }
        },
        beforeMount(){
            this.accessPage()
        }
    }
</script>

<style>

</style>