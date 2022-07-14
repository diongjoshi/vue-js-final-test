<template>
  <div class="links">
    <router-link class="linkTo" to="/posts">Posts</router-link>
    <router-link class="linkTo" to="/random-user">Random User</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.links {
  display: flex;
  gap: 30px;
  justify-content: center;
  font-size: 20px;
}
.linkTo {
  display: inline-block;
  position: relative;
  color: black;
  text-decoration: none;
}

.linkTo::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transition: transform 0.25s ease-out;
}

.linkTo:hover::after {
  transform: scaleX(1);
}
</style>
