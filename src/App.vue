<template>
  <comp-header></comp-header>
 
 <router-view/>
</template>

<script>
import compHeader from "./components/compHeader.vue";



export default{

  components:{
    compHeader,
   
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

.notVisible{
  visibility: hidden;
}

</style>
