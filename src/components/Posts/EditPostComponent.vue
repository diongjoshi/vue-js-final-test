<template>
   <div class="form">
    <h1>Update Post</h1>
       <form v-if="data !==null" @submit.prevent="submitForm">
        <input class="form__inputs" placeholder="User Id" id="userId" v-model="data.userId" name="userId" type="number">
        <br>
        <label class="errorMsg" v-if="errors.userId !== null">{{errors.userId}}</label>
        <br>
        <input class="form__inputs" placeholder="Title" id="title" v-model="data.title" name="title">
        <br>
         <label class="errorMsg" v-if="errors.title !== null">{{errors.title}}</label>
        <br>
        <input class="form__inputs" placeholder="Body" id="body" v-model="data.body" name="body">
        <br>
         <label class="errorMsg" v-if="errors.body !== null">{{errors.body}}</label>
        <br>
        <input class="updateBtn" type="submit" value="Update Post">
    </form>
    <br>
     <button class="deleteBtn" v-on:click="deletePost()">Delete Post</button>
       <div class="editPost" v-if="editPost !== null">
            <h1>{{editPost.userId}}</h1>
            <h3>{{editPost.title}}</h3>
            <p>{{editPost.body}}</p>
         </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'EditPostComponent',
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
            editPost:null
         }
    },
    mounted(){
      const id  = this.$route.params.id;
      axios
      .get('https://jsonplaceholder.typicode.com/posts/'+id)
          .then(response => (this.data = response.data))
    },
    methods:{
      submitForm(){
      if(this.data.userId === ''){
        this.errors.userId = 'User Id is required'
      } else {
        this.errors.userId = '';
      }
      if(this.data.title === ''){
        this.errors.title = 'Title is required'
      }else {
        this.errors.title = '';
      }
      if(this.data.body === ''){
        this.errors.body = 'Body is required'
      }else {
        this.errors.body = '';
      }
      if(this.errors.userId !== '' || this.errors.title !== '' || this.errors.body !== ''){
        return false;
      }
      const id  = this.$route.params.id;
      axios.put('https://jsonplaceholder.typicode.com/posts/'+id, this.data )
            .then(response =>(this.editPost = response.data))
      },
      deletePost(){
        const id  = this.$route.params.id;
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(()=>{
                this.$router.push('/posts')
        });
      }
    }
}
</script>

<style>
.form{
    max-width: 450px;
    margin: auto;
    padding: 20px 40px 40px 40px;
    background-color: whitesmoke;
    border-radius: 4px;
}
.form h1 {
    color: #0f2027;
    text-align: center;
}
.form__inputs{
    border: 1px solid slategray;
    font-size: 15px;
    padding: 7px;
}
.updateBtn{
    background-color: rgb(41, 57, 194);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 47%;
    cursor: pointer;
    font-size: 14px;
}
.deleteBtn{
    background-color: rgb(194 41 58);
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
.editPost{
     max-width: 400px;
    margin: auto;
    margin-top: 40px;
    background: aliceblue;
    padding: 20px;
    font-size: smaller;
    border: 1px solid bisque;
}
</style>