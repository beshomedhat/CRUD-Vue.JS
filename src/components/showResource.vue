
<template>
<div> 
<navbar/>
    <div class="auth-layout p-5 d-flex justify-content-center align-items-center">
        <div class="auth-content p-5">
            <div class="card text-center">
                <div class="card-header" style="font-weight: bold;">
                    {{post.name}}
                </div>
                <span style="font-weight: bold"></span>
                <div class="card-body">
                    <p class="card-text"><span style="font-weight: bold">Color:</span> {{post.color}}</p>
                    <p class="card-text"><span style="font-weight: bold">Pantone Value:</span>  {{post.pantone_value}}</p>
                    <p class="card-text"><span style="font-weight: bold">year:</span>  {{post.year}}</p>
                </div>
            </div>       
        </div>
    </div>
</div>
</template>

<script>
import navbar from '../components/navbar'
import axios from 'axios'
import {mapGetters, mapMutations} from "vuex";


    export default{
        name: 'showResource',      
        components:{
            navbar
        },
        computed:{
            ... mapGetters(["post"]),
        },
        created: function(){
            var id = this.$route.params.id;
            this.$store.dispatch('getResource',id);
            
        },
        methods:{
            ... mapMutations(["setPost"]),
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