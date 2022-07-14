<template>
  <h1>Post Review</h1>
  <br />
  <div class="post" v-if="post !== null">
    <h1>{{ post.userId }}</h1>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <br /><br />
  <h1>Comments</h1>
  <br />
  <div class="post__comments">
    <div class="post__comment" v-for="(comment, index) in comments" :key="index">
      <h1>{{ comment.name }}</h1>
      <h3>{{ comment.email }}</h3>
      <h3>{{ comment.body }}</h3>
      <br /><br>
      <h4>Post ID: {{comment.postId}}</h4>
      <br><br>
    </div>
    <div class="post__comment" v-for="(reply, index) in replies" :key="index">
      <h1>{{reply.name}}</h1>
      <h3>{{reply.email}}</h3>
      <h3>{{reply.body}}</h3>
      <br><br>
      <h4>Post ID:{{reply.postId}}</h4>
      <br>
  </div>
  </div>
  <br><br>
  <form class="form__reply" @submit.prevent="leaveReply">
    <h1>Add New Comment</h1>
    <input type="text" v-model="reply.name" placeholder="Name">
    <br>
    <label class="errorMsg"  v-if="errors.name !== null">{{errors.name}}</label>
    <br>
    <input type="email" v-model="reply.email" placeholder="Email">
    <br>
    <label class="errorMsg" v-if="errors.email !== null">{{errors.email}}</label>
    <br>
    <input type="text" v-model="reply.body" placeholder="Body">
    <br>
    <label class="errorMsg" v-if="errors.body !== null">{{errors.body}}</label>
    <br>
    <input class="replyBtn" type="submit" value="Add">
  </form>
  <br/><br/>

   
  <br/><br/>
</template>

<script>
import axios from "axios";
export default {
  name: "ViewPostComponent",
  data() {
    return {
      post: null,
      comments: [],
      replies:[],
      reply:{
        name:null,
        email:null,
        body:null
      },
      errors:{
        name:null,
        email:null,
        body:null
      }
  }
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => (this.post = response.data));

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then((response) => (this.comments = response.data));
  },
  methods:{
    leaveReply(){
      if(this.reply.name === null || this.reply.name === ''){
        this.errors.name = 'Name is required'
      } else {
        this.errors.name = null;
      }
      if(this.reply.email === null || this.reply.email === ''){
        this.errors.email = 'Email is required'
      }else {
        this.errors.email = null;
      }
      if(this.reply.body === null || this.reply.body === ''){
        this.errors.body = 'Body is required'
      }else {
        this.errors.body = null;
      }
      if(this.errors.name !== null || this.errors.email !== null || this.errors.body !== null){
        return false;
      }
      const id = this.$route.params.id;

       axios
      .post("https://jsonplaceholder.typicode.com/posts/" + id + "/comments", this.reply)
      .then((response) => (this.replies.push(response.data)));
    }
  }
};
</script>

<style>
.post {
  max-width: 450px;
  height: 100%;
  margin: auto;
  background: aliceblue;
  padding: 25px;
  border: 1px solid bisque;
}

.post__comments {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.post__comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  font-size: smaller;
  background: whitesmoke;
  padding: 30px;
  border-radius: 17px;
  border: 1px solid bisque;
  color: black;
  cursor: pointer;
  opacity: 0.6;
}
.post__comment:hover {
  opacity: 1;
  transform: scale(1.03);
  transition: all 0.3s ease-out;
}

.replyBtn {
  background: bisque;
  margin-left: -2px;
  color: black;
  border: 1px solid;
  padding: 2px 10px;
  cursor: pointer;
}
.replyCm {
  font-weight: 500;
  margin-bottom: 25px;
}
.form__reply{
    max-width: 450px;
    margin: auto;
    padding: 20px 40px 40px 40px;
    background-color: whitesmoke;
    border-radius: 4px;
}
.form__reply input{
      border: 1px solid slategray;
    font-size: 15px;
    padding: 7px;
}
.replyBtn{
    background-color: rgb(41, 57, 194);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 47%;
    cursor: pointer;
    font-size: 14px;
}
</style>
