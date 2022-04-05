<template>
  <button
    v-if="isInFavorits"
    class="btn add"
    @click.stop="addToFavorits"
  >
    Ajouter au favoris
  </button>
  <button v-else class="btn remove" @click.stop="removeFromFavorits">supprimer</button>
</template>




<script>
export default {
  props: ["movieID"],
  data() {
    return {
    favorisList: localStorage.favoris ? localStorage.favoris.split(",") : [],
    };
  },

  methods: {
    addToFavorits() {
      let localStore = localStorage.favoris
        ? localStorage.favoris.split(",")
        : [];
      if (!localStore.includes(this.movieID.toString())) {
        localStore.push(this.movieID.toString());

        this.favorisList=localStore

      localStorage.favoris = localStore.join(",");
      }
    },

    removeFromFavorits(){
        let localStore = localStorage.favoris
        ? localStorage.favoris.split(",")
        : [];
        const index = localStore.indexOf(this.movieID.toString())
      if (localStore.includes(this.movieID.toString())) {
        localStore.splice(index,1);

        this.favorisList=localStore
      localStorage.favoris = localStore.join(",");
      }
      }
  },
  computed:{
      isInFavorits(){
    if(!this.favorisList.includes(this.movieID.toString())){
        return true;
      }else{
          return false;
      }
      },
      
  }
};
</script>


<style scoped>
.btn {
  display: block;
  margin-left: auto;
  padding: 0.5em 1em;
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: background 0.1s;
}

.btn.add {
  background: rgb(24, 178, 4);
}
.btn.add:hover {
  background: green;
}

.btn.remove{
    background: red;
}

.btn.remove:hover{
    background: rgb(124, 2, 2);
}

</style>