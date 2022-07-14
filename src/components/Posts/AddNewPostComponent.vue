<template>
   <div class="createPost">
    <h1>Create Post</h1>
       <form v-if="data !==null" @submit.prevent="submitForm">
        <input class="createPost__inputs" placeholder="User Id" id="userId" v-model="data.userId" name="userId" type="number">
        <br>
        <label class="errorMsg" v-if="errors.userId !== null">{{errors.userId}}</label>
        <br>
        <input class="createPost__inputs" placeholder="Title" id="title" v-model="data.title" name="title">
        <br>
         <label class="errorMsg" v-if="errors.title !== null">{{errors.title}}</label>
        <br>
        <input class="createPost__inputs" placeholder="Body" id="body" v-model="data.body" name="body">
        <br>
         <label class="errorMsg" v-if="errors.body !== null">{{errors.body}}</label>
        <br>
        <input class="addBtn" type="submit" value="Add Post">
    </form>
       <div class="createdPost" v-if="addPost !== null">
           <h1>{{addPost.userId}}</h1>
           <h3>{{addPost.title}}</h3>
           <p>{{addPost.body}}</p>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'AddNewPostComponent',
    data(){
        return{
            data:{
                userId:null,
                title:null,
                body:null
            },
            errors:{
                userId:null,
                title:null,
                body:null
            },
            addPost:null
         }
    },
    methods:{
      submitForm(){
      if(this.data.userId === null || this.data.userId === ''){
        this.errors.userId = 'User Id is required'
      } else {
        this.errors.userId = null;
      }
      if(this.data.title === null || this.data.title === ''){
        this.errors.title = 'Title is required'
      }else {
        this.errors.title = null;
      }
      if(this.data.body === null || this.data.body === ''){
        this.errors.body = 'Body is required'
      }else {
        this.errors.body = null;
      }
      if(this.errors.userId !== null || this.errors.title !== null || this.errors.body !== null){
        return false;
      }
      axios.post('https://jsonplaceholder.typicode.com/posts', this.data )
            .then(response =>(this.addPost = response.data))
      },
    }
}
</script>

<style>
.createPost{
    max-width: 450px;
    margin: auto;
    padding: 20px 40px 40px 40px;
    background-color: whitesmoke;
    border-radius: 4px;
}
.createPost__inputs{
    border: 1px solid slategray;
    font-size: 15px;
    padding: 7px;
}
.addBtn{
    background-color: rgb(41, 57, 194);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 47%;
    cursor: pointer;
    font-size: 14px;
}
.errorMsg{
    color: #ff3860;
    font-size: smaller;
}
.createdPost{
    max-width: 300px;
    margin: auto;
    margin-top: 40px;
    background: aliceblue;
    padding: 20px;
    font-size: smaller;
    border: 1px solid bisque;
}
</style>