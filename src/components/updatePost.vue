<template>
    <div> 
        <navbar/>
        <div class="auth-layout p-5 d-flex justify-content-center align-items-center">
            
            <div class="auth-content p-5">
                <h1 class="text-center"> EDIT </h1>
                <div class="form-group mt-2">
                    <label style="font-weight: bold;" for="postTitle">Title</label>
                    <textarea rows="3" :value="posts.title" class="form-control" id="postTitle" name="postTitle"  ></textarea>
                </div>
                <div class="form-group mt-2">
                    <label style="font-weight: bold;" for="postTitle">Body</label>
                    <textarea rows="5" :value="posts.body" class="form-control" id="postBody" name="postBody"  ></textarea>
                </div> 
                <div class="form-group mt-2">
                    <label style="font-weight: bold;" for="postTitle">UserID</label>
                    <input :value="posts.userId" class="form-control" id="postUserID" name="postUserID"  >
                </div> 
                <div class="text-center">
                    <button @click="postPost()" id="btnSubmit" class="btn btn-outline-primary form-control">Save</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../components/navbar'
import axios from 'axios'


    export default{
        name: 'updatepost',
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
                             
            });
            
        },
        methods:{
            postPost(){
                
                var id = this.$route.params.id;
                var link = 'https://jsonplaceholder.typicode.com/posts/'+id
                axios.put(link, {
                body: JSON.stringify({
                    id: id,
                    title: document.getElementById('postTitle').value,
                    body: document.getElementById('postBody').value,
                    userId: document.getElementById('postUserID').value
                })
                })
                .then(response => {
                    alert("response.status = " + response.status);
                })
            }
        }

        
    }
</script>

<style>
.auth-content
{
    background-color:whitesmoke;
    width: 40%;
    
    border-radius: 0.5rem;
}
</style>