
<template>
<div> 
<navbar/>
    <div class="auth-layout p-5 d-flex justify-content-center align-items-center">
        <div class="auth-content p-5">
            <div class="card text-center">
                <div class="card-header" style="font-weight: bold;">
                    {{posts.name}}
                </div>
                <span style="font-weight: bold"></span>
                <div class="card-body">
                    <p class="card-text"><span style="font-weight: bold">Color:</span> {{posts.color}}</p>
                    <p class="card-text"><span style="font-weight: bold">Pantone Value:</span>  {{posts.pantone_value}}</p>
                    <p class="card-text"><span style="font-weight: bold">year:</span>  {{posts.year}}</p>
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
        name: 'showResource',
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
            var link = 'https://reqres.in/api/unknown/'+id
            axios.get(link).then(posts =>{
                this.posts=posts.data.data
                console.log(id);
                console.log(this.posts);
              
            })
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