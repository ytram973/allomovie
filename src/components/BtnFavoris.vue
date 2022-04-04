<template>
    <button class="btn add">Ajouter au favorie</button>
</template>


<style scoped>
.btn{
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

.btn.add{
    background: rgb(24, 178, 4);
}
.btn.add:hover{
    background: green;
}
</style>