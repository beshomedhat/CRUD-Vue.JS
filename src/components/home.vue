<template>
    
    <div>
        <navbar/>
        <router-view></router-view>
    </div>
    
</template>

<script>

import navbar from '../components/navbar'
import post from '../components/post'
import createUser from '../components/createUser'
import showUser from '../components/showUser'
import updateUser from '../components/updateUser'
import users from '../components/users'
import postsExample from '../components/posts'
import resources from '../components/resources'
import showResource from '../components/showResource'

import axios from 'axios';
    export default{
        name: 'home',
        data(){

            return{
                posts:[]

            }
        },
        components: {
            postsExample,
            post,
            createUser,
            showUser,
            updateUser,
            users,
            navbar,
            resources,
            showResource
            
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