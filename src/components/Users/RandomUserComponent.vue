<template>
  <div class="rndUser" v-if="user !== null">
    <h4>{{ user.name }}</h4>
    <h4>{{ user.username }}</h4>
    <h4>{{ user.email }}</h4>
  </div>

  <br /><br />

  <h2>Albums</h2>
  <br />
  <div class="rndUser__album" v-if="album !== null">
    <RandomUserAlbums
      v-for="(album, index) in albums"
      :key="index"
      :album="album"
    />
  </div>
</template>

<script>
import axios from "axios";
import RandomUserAlbums from "./RandomUserAlbums";
export default {
  name: "RandomUserComponent",
  data() {
    return {
      user: null,
      albums: [],
    };
  },
  async mounted() {
    const rndNr = this.randomNr(1, 10);

    const user = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + rndNr
    );
    this.user = user.data;

    const albums = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + this.user.id + "/albums"
    );
    this.albums = albums.data;
  },
  methods: {
    randomNr(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  components: {
    RandomUserAlbums,
  },
};
</script>

<style>
.rndUser {
  max-width: 350px;
  margin: auto;
  background: #358597;
  padding: 15px;
  font-size: 15px;
  border: 2px solid #f4a896;
  color: white;
}
.rndUser__album {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
