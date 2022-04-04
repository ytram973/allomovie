<template>
  <div class="searchArea">
    <form @submit.prevent="makeSearch">
      <input type="search" placeholder="Rechercher..." v-model="search" />
      <input type="submit" value="go!" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    makeSearch() {
        this.$emit("validatingSearch",this.search)
    },
  },
};
</script>


<style>
.searchArea {
  position: fixed;
  width: 100%;
  top: 80px;
  background: rgb(235, 32, 32);
  padding: 1em;
  z-index: 10;
}

form {
  width: 50%;
  margin: auto;
  text-align: center;
}

form input[type="search"] {
  font-size: 1.5em;
  padding: 0.3em;
  border-radius: 5px;
  width: 70%;
}

form input[type="submit"] {
  font-size: 1.5em;
  padding: 0.2em 0.8em;
  border: none;
  color: white;
  background-color: blueviolet;
  margin-left: 20px;
}
</style>
