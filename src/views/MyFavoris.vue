<template>

    <div v-if="movies.length" class="moviesList">
    <CardMovie
      v-for="movie of movies"
      :key="movie.id"
      :dataMovie="movie"
      @click="selectedMovie = movie.id"
    ></CardMovie>
  </div>

  <div v-else class="moviesList">
    <p>Aucun favoris trouvé !</p>
  </div>

 
</template>


<script>
import CardMovie from "../components/CardMovie.vue";


// https://api.themoviedb.org/3/movie/634649?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=fr-Fr

export default{
    components:{CardMovie},


    data(){
        return{
            localStore:localStorage.favoris ? localStorage.favoris.split(","):[],
            movies:[]
        }

    },
    mounted(){
        this.localStore.forEach((ID)=>{

            fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=fr-Fr`)
            .then((response) => response.json())
            .then((res) => this.movies.push(res))       
    

        })
    }
}
</script>






<style scoped>
h1{
    margin-top: 160px;
}
</style>