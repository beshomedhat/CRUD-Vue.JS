<template>
<div class=" auth-layout p-5 d-flex justify-content-center align-items-center">
    <div class="auth-content p-5">
        
<form>
    <h1 class="text-center">SIGN UP</h1>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line1"></div>
    <div class="form-group mt-2">
        <label for="exampleInputFirstName">First name</label>
        <input type="text" class="form-control" placeholder="Enter your first name" id="exampleInputFirstName">
    </div>
    <div class="form-group">
        <label for="exampleInputLastName">Last name</label>
        <input type="text" class="form-control" placeholder="Enter your last name" id="exampleInputLastName">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
    </div>
    <div class="text-center">
        <button @click="signUp()" type="submit" class="btn btn-outline-danger form-control">Submit</button>
    </div>


    <div class="text-center p-5">
        <span class="">
            Or
            <router-link :to="'./login'" >Login</router-link>
        </span>
    </div>
</form>
        
        <p class="text-center text-muted">2019-2020</p>
    </div>
</div>


</template>

<script>
import axios from 'axios'
    export default{
        name: 'register',
        data(){

            return{
                posts:[]

            }
        },
        methods:{
            empty(){
                if(document.getElementById('exampleInputEmail1').value=='' || document.getElementById('exampleInputPassword1').value==''){
                    return true;
                }
                
            },
            signUp(){
                if(localStorage.getItem("loginToken") !=null)
                {
                    localStorage.setItem("loginToken",null);
                }

                if(this.empty())
                {
                    alert('enter your data');
                }
                else{
                axios.post('https://reqres.in/api/register', {
                
                    email: document.getElementById('exampleInputEmail1').value,
                    password: document.getElementById('exampleInputPassword1').value
                
                })
                .then(response => {
                    if(response.status==200)
                    {
                        localStorage.setItem("loginToken",response.data.token);
                        this.$router.push('../resources')
                    }
                    

                })
                
                }
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