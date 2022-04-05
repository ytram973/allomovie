 <template>
     

 
 <SearchArea @validatingSearch="searching"></SearchArea>


<div v-if="movies.length" class="moviesList">
  
  <CardMovie v-for="movie of movies" :key="movie.id" :dataMovie="movie" @click="selectedMovie=movie.id"></CardMovie>
</div>

<div v-else class="moviesList" >

  <p>Aucun film trouver bozo</p>

</div>


<PanelMovie v-if="selectedMovie" :movieID="selectedMovie"/>

</template>

<script>
import SearchArea from "../components/SearchArea.vue";
import CardMovie from "../components/CardMovie.vue";
import PanelMovie from "../components/PanelMovie.vue";



export default{

components:{
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
    methods:{
      searching(param){
        if(param != ""){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b7de3af7442ae1ea5548de091d89d5d&
        language=fr-FR&query=${param}&page=1&include_adult=true`)
      .then((response) => response.json())
      .then((res) => {
        (this.movies = res.results)
        console.log(this.movies);
      });
      }
      }
    }
    
}




</script>
