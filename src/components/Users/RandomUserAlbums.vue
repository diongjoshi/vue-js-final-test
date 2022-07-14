<template>
    <div class="album">
        <h3>{{album.userId}}</h3>
        <h3>{{album.title}}</h3>
        <button class="album__btn" v-on:click="loadPhotos(album.id)">Load Photos</button>
    </div>

    <div class="album__photos" v-if="photoActive"> 
        <h5 class="photos__heading">Photos</h5>
        <button class="photos__btn" v-on:click="closePopUp()">X</button>
        <div v-for="(photo, index) in photos" :key="index">
            <img :src="photo.thumbnailUrl">
        </div>
    </div>

    
   
</template>

<script>
import axios from 'axios';
export default {
    name: 'RandomUserAlbums',
    data(){
        return{
            photos:[],
            photoActive: false
        }
    },
    props:{
        album:Object,
        default:null
    },
    methods:{
        loadPhotos(id){
            axios.get('https://jsonplaceholder.typicode.com/albums/'+ id +'/photos')
            .then(response =>{
                this.photos = response.data;
                this.photoActive = true;
            })
        },
        closePopUp(){
            this.photoActive = false;
            this.photos = [];            
        }
    }
}
</script>

<style>
.album{
    max-width: 300px;
    flex: 1 1 30%;
    font-size: smaller;
    background: #3aafa9;
    padding: 30px;
    border-radius: 17px;
    border: 2px solid #2b7A78;
    color: #17252A;
    opacity: 0.6;
}
.album:hover{
    opacity: 1;
    transform: scale(1.1);
    transition: all .3s ease-out;
}
.album__btn{
    background-color: #def2f1;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 50%;
    cursor: pointer;
    font-size: 14px;
}
.album__photos{
    max-width: 600px;
    max-height: 700px;
    overflow-y: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    gap: 20px;
    z-index: 2;
    background: #358597;
    justify-content: center;
    padding: 20px;
}
.photos__heading{
    color: white;
    font-size: 20px;
    width: 100%;
}
.photos__btn{
    position: absolute;
    top: 20px;
    right: 20px;
}

</style>