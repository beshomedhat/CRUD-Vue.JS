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

import {mapGetters, mapMutations} from "vuex";

    export default{
        name: 'resources',
        computed:{
            ... mapGetters(["posts", "pages"]),
        },
        components:{
            navbar
        },
        
        methods:{
            ... mapMutations(["setPosts", "setPages"]),

            
            
            pageData(num){
                   this.$store.dispatch('pageData',num);            

            },
            accessPage(){
                if(localStorage.getItem("loginToken") ==null)
                {
                    this.$router.push('../login');
                }
            }
        },
        created: function(){
            this.$store.dispatch('getResources');
        },
        beforeMount(){
            this.accessPage();
           

        }
    }
</script>

<style>

</style>