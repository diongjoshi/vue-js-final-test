<template>
  <HeaderComponent />
  <br /><br />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "./components/Shared/HeaderComponent";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
