<template>
  <div class="post__item">
    <h1>{{ post.userId }}</h1>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <br />
    <div class="router__links">
      <a class="viewBtn" href=""
        ><router-link class="viewBtn" :to="'/posts/' + post.id"
          >View Post</router-link
        ></a
      >
      <a class="editBtn" href=""
        ><router-link class="editBtn" :to="'/edit-post/' + post.id"
          >Edit Post</router-link
        ></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: Object,
    default: null,
  },
};
</script>

<style>
.post__item {
  position: relative;
  flex: 1 1 20%;
  background: aliceblue;
  padding: 15px;
  font-size: smaller;
  border: 1px solid bisque;
}

.viewBtn,
.editBtn {
  text-decoration: none;
  text-decoration: none;
  background: lightsteelblue;
  color: black;
  padding: 10px 8px;
}

.viewBtn:hover,
.editBtn:hover {
  background: lightslategrey;
  color: white;
  transition: all 0.1s ease;
}

.router__links {
  display: flex;
  justify-content: space-around;
}
</style>
