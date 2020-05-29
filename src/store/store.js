import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts:[],
        pages:[],
        post:[]
    },
    getters: {
        posts(state){
            return state.posts;
        },
        pages(state){
            return state.pages;
        },
        post(state){
            return state.post;
        },
    },
    mutations: {
        setPosts(state, products){
            state.posts = products;
        },
        setPages(state, pag){
            state.pages = pag;
        },
        setPost(state, products){
            state.post = products;
        },

    },
    actions: {
        //------------------------------------Resources list------------------------------------------------------
        getResources({ commit }){
            axios.get('https://reqres.in/api/unknown').then(posts =>{
                commit('setPosts', posts.data.data);
                let p=[];
                for(let i=1; i<posts.data.total_pages+1; i++)
                {
                    p.push(i) ;

                }
                commit('setPages', p);
            }
            ,
                err =>{
                     console.log(err)
                }
            )
        },
        pageData({ commit },num){
            axios.get('https://reqres.in/api/unknown?page='+num).then(posts =>{
            
                commit('setPosts', posts.data.data);               
                            
        },
            err =>{
                 console.log(err)
            })                

        },
        //------------------------------------Resource------------------------------------------------------
        getResource({ commit },id){
            var link = 'https://reqres.in/api/unknown/'+id
            axios.get(link).then(posts =>{
                commit('setPost', posts.data.data);  
                              
            },
                err =>{
                     console.log(err)
                })
        },
        //------------------------------------users list------------------------------------------------------
        getusers({ commit }){
            axios.get('https://reqres.in/api/users').then(posts =>{
                commit('setPosts', posts.data.data);
                let p=[];
                for(let i=1; i<posts.data.total_pages+1; i++)
                {
                    p.push(i) ;

                }
                commit('setPages', p);
            }
            ,
                err =>{
                     console.log(err)
                }
            )
        },
        pageUsersData({ commit },num){
            axios.get('https://reqres.in/api/users?page='+num).then(posts =>{
            
                commit('setPosts', posts.data.data);               
                            
        },
            err =>{
                 console.log(err)
            })                

        },
        //------------------------------------user------------------------------------------------------
        getuser({ commit },id){
            var link = 'https://reqres.in/api/users/'+id
            axios.get(link).then(posts =>{
                commit('setPost', posts.data.data);  
                              
            },
                err =>{
                     console.log(err)
                })
        },
        //------------------------------------Delete user------------------------------------------------------
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
        //------------------------------------Create user------------------------------------------------------
        postUser(name,job){
            
            var link = 'https://reqres.in/api/users'
            axios.post(link, {
            body: JSON.stringify({
                name: name,
                job: job
            })
            })
            .then(response => {
                alert("response.status = " + response.status);
            },
            err =>{
                 console.log(err)
            })
            
            
        },
        //------------------------------------Update user------------------------------------------------------
        updateUser(id,name,job){
            
            var link = 'https://reqres.in/api/users'+id
            axios.put(link, {
            body: JSON.stringify({
                name: name,
                job: job
            })
            })
            .then(response => {
                alert("response.status = " + response.status);
            },
            err =>{
                 console.log(err)
            })
            
            
        }
        
    }
});

