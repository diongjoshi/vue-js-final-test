<template>
    <h1>Posts</h1>
    <br>
    <router-link class="createBtn" to="/add-post">Create Post</router-link>
    <br><br><br>
    <div class="posts">
        <PostComponent v-for="(post , index) in posts.data" :key="index" :post="post"/>
    </div>
    
</template>

<script>
import axios from 'axios';
import PostComponent from './PostComponent'
export default {
    name: 'PostsComponent',
    data(){
        return{
            posts:[]
        }
    },
    mounted(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>(this.posts = response))
    },
    components:{
        PostComponent
    }
}

</script>

<style>
.posts{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.createBtn{
    background-color: rgb(69 86 227);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
}
</style>