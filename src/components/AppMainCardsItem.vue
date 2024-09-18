<script>
export default {
  data() {
    return {
      
    }
  },
  props:{
    monsterObject:{
      type:Object,
      required:true,
    }
  }
}
</script>

<template>
  <div class="cardContainer">
    <img :src="monsterObject.card_images[0].image_url" :alt="monsterObject.name">
  <h3>{{ monsterObject.name }}</h3>
  <h4>{{ monsterObject.archetype }}</h4>
  </div>
  
</template>

<style scoped>
.cardContainer{
  background-color: orange;
  border: 1px black;

  min-height:250px;
  max-width: 150px;
  padding: 10px;
  margin: 10px;
  color: white;
  text-align: center;
  font-size: 12px;
  width: calc(100% / 5);
  
}
img{
    height: 200px;
    width: 150px;
    object-fit: cover;
  }
</style>