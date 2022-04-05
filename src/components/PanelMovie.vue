<template>
  <div class="panel">
    <h2>{{ movie.title ? movie.title : 'Aucun titre !' }}</h2>
    <img :src="movie.poster_path ? getUrl(movie.poster_path): './assets/img/movie_poster.jpg'"
      :alt="`affiche du film ${movie.title ? movie.title :'inconnu'}`">
    <span>Date de sortie: {{movie.release_date ? movie.release_date :'Aucune date de sortie'}}</span>
    <span>Note de {{movie.vote_average}}/10 </span>


    <ul>
        <li v-for= "genre of movie.genres" :key="genre.id">{{genre.name}}</li>
    </ul>

<p>{{movie.overview ? movie.overview:'Aucune description...'}}</p>
  </div>


</template>



<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  props: ["movieID"],
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    fetch(`https://api.themoviedb.org/3/movie/${this.movieID}
        ?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=fr-FR`)
      .then((response) => response.json())
      .then((res) => (this.movie = res));
  },

  updated() {
    fetch(`https://api.themoviedb.org/3/movie/${this.movieID}
        ?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=fr-FR`)
      .then((response) => response.json())
      .then((res) => (this.movie = res));
  },
  methods:{
        getUrl(url){
            return`https://image.tmdb.org/t/p/w500${url}`
        }
    },
};
</script>




<style scoped>
.panel {
max-width: 400px;
height: 400px;
  padding-right: 1em;
  position: fixed;
  top: 160px;
  right: 0;
}

img {
  width: 30%;
  float: left;
  margin: 1em 1em 1em 0;
}
span {
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 1em 0;
}

.ico.star {
  color: yellow;
  filter: drop-shadow(0 0 1px black);
}

ul {
  list-style: none;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}
li {
  padding: 0.2em;
  border-radius: 3px;
  color: white;
  background: red;
  box-shadow: 1px 1px 5px grey;
}

p {
  clear: both;
  text-align: justify;
  font-size: 1.1em;
  overflow: scroll;
}
</style>