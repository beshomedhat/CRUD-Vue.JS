<template>
<div> 
<navbar/>
    <div class="auth-layout p-5 d-flex justify-content-center align-items-center">
        <div class="auth-content p-5">
            <div class="card text-center">
                <div class="card-header" style="font-weight: bold;">
                    {{posts.title}}
                </div>
                <span style="font-weight: bold"></span>
                <div class="card-body">
                    <p class="card-text"><span style="font-weight: bold">Body:</span> {{posts.body}}</p>
                    <p class="card-text"><span style="font-weight: bold">User ID:</span>  {{posts.userId}}</p>
                </div>
            </div>       
        </div>
    </div>
</div>
</template>

<script>
import navbar from '../components/navbar'
import axios from 'axios'


    export default{
        name: 'post',
        data(){

            return{
                posts:[],
                

            }
        },
        
        components:{
            navbar
        },
        created(){
            var id = this.$route.params.id;
            var link = 'https://jsonplaceholder.typicode.com/posts/'+id
            axios.get(link).then(posts =>{
                this.posts=posts.data
                console.log(id);
                console.log(this.posts);
              
            })
        },

        
    }
</script>

<style>

</style>