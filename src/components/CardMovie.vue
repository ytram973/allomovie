<template>

<div class="cardMovie">
<img :src="getUrl(dataMovie.poster_path)" alt="image">
  
  <div class="card-content">
    <h3>{{dataMovie.title}}</h3>

    <div class="card-content-desc">
        <p class="info">
            <span class="date">{{dataMovie.release_date}}</span>
            <span class="vote">{{dataMovie.vote_average}}/10({{dataMovie.vote_count}}votes)</span>
        </p>
        <BtnFavoris/>
    </div>
    </div>
    </div>



</template>

<script>
import BtnFavoris from "./BtnFavoris.vue"

export default{
    props:[
        "dataMovie",
    ],
    methods:{
        getUrl(url){
            return`https://image.tmdb.org/t/p/w500${url}`
        }
    },
    components: {BtnFavoris}
}
</script>

<style scoped>
.cardMovie{
    font-size: 0.7em;
    display: grid;
    grid-template-areas: 
    "img cg cg"
    "img cg cg"
    "img cg cg"
    ;
width: 300px;
column-gap: 10px;
background: rgb(243, 242, 242);
position: relative;
cursor: pointer;
}


.card-content{
    grid-area: cg;
    padding: 0 10px 10px 0;
}

img{
    grid-area: img;
    width: 90px;
    object-fit: cover;
    object-position: 30%;
}

h3{
    margin: 0.5em 0;
}

.card-content-desc{
    margin: 0.5em 0;
}
.info{
    display: flex;
    gap: 1em;
}

.date .vote{
    display: flex;
    align-items: center;
}

svg{
    margin-right: 0.2em;
}
.vote > svg {
    color: yellow;
    filter: drop-shadow(0 0 1px black);
}
</style>
