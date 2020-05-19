<template>
    <div >
        <navbar/>
        <div class="container my-4">
            <center><h1>Resources</h1></center>
            <table class="table mt-4">
                <thead class="thead-light">
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
        name: 'resources',
        data(){

            return{
                posts:[],
                pages:[]

            }
        },
        created(){
            axios.get('https://reqres.in/api/unknown').then(posts =>{
                
                this.posts=posts.data.data
                for(let i=1; i<posts.data.total_pages+1; i++)
                {
                    this.pages.push(i) ;

                }

              
            }
            ,
                err =>{
                     console.log(err)
                }
            )
        },
        components:{
            navbar
        },
        methods:{
            pageData(num){
                axios.get('https://reqres.in/api/unknown?page='+num).then(posts =>{
                
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
        beforeMount(){
            this.accessPage()
        }
    }
</script>

<style>

</style>