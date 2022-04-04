<template>
  <comp-header></comp-header>
  <SearchArea></SearchArea>


<div class="moviesList">
  <CardMovie v-for="movie of movies" :key="movie.id" :dataMovie="movie" @click="selectedMovie=movie.id"></CardMovie>

</div>


<PanelMovie v-if="selectedMovie" :movieID="selectedMovie"/>
</template>

<script>
import compHeader from "./components/compHeader.vue";
import SearchArea from "./components/SearchArea.vue";
import CardMovie from "./components/CardMovie.vue"
import PanelMovie from "./components/PanelMovie.vue"


export default{

  components:{
    compHeader,
    SearchArea,
    CardMovie,
    PanelMovie,
   
  },


  mounted(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=fr-EU&page=1')
        .then(response =>response.json())
        .then(res=>{
            this.movies = res.results;
        });
    },
    data(){
        return{
            movies:[],
            selectedMovie:""
        }
    },
    
}





</script>

<style>
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
  padding: 0.5em 1em;
  border-radius: 10px;

}
a:hover{
  color: black;
  background: aliceblue;

}
a.active{
  color: white;
}

.moviesList{
  max-width: 620px;
  margin:160px 0 0 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}


</style>
