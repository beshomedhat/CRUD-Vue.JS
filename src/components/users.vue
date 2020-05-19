<template>
    <div>
        <navbar/>
            <div class="container">
    
                <router-link class="btn btn-outline-primary m-2" :to="'./createUser'" ><span>Create User</span> <i class="fa fa-plus fa-lg"></i> </router-link>
                <table class="table">
                        <thead class="thead-light">
                        <tr>                    
                            <th>#</th>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for= '(post, index) in posts' :key="post.id">                       
                                <td>{{index+1}}</td>
                                <td>{{post.id}}</td>
                                <td>{{post.first_name}}</td>
                                <td>{{post.last_name}}</td>                        
                                <td>
                                    <router-link :to="'./showUser/'+post.id" ><i class="fa fa-eye"></i> </router-link>
                                    <router-link :to="'./updateUser/'+post.id" ><i class="fa fa-edit"></i> </router-link>                        
                                    <i style="cursor: pointer;" @click="deleteUser(post.id)" class="fa fa-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="d-flex justify-content-center ">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a @click="pageData(1)" class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>

                        <li class="page-item" v-for= 'page in pages' :key="page" @click="pageData(page)" ><a class="page-link" href="#">{{page}}</a></li>
                        
                        <li class="page-item">
                        <a @click="pageData(pages.length)" class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
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
                posts:[],
                pages:[]

            }
        },
        created(){
            axios.get('https://reqres.in/api/users').then(posts =>{
                
                this.posts=posts.data.data                
                for(let i=1; i<posts.data.total_pages+1; i++)
                {
                    this.pages.push(i) ;

                }
                                
            })

        },
        methods:{
            pageData(num){
                axios.get('https://reqres.in/api/users?page='+num).then(posts =>{
                
                this.posts=posts.data.data                
                                
            },
                err =>{
                     console.log(err)
                })                

            },
            deleteUser(id){
                var link = 'https://reqres.in/api/users/'+id
                axios.delete(link)
                .then(response => {
                    alert( 'DELETE and response.status'+ response.status)
                },
                err =>{
                     console.log(err)
                })
            },
            accessPage(){
                if(localStorage.getItem("loginToken") ==null)
                {
                    this.$router.push('../login');
                }
            }
        },
        components:{
            navbar
        },
        beforeMount(){
            this.accessPage()
        }
    }
</script>

<style>

</style>