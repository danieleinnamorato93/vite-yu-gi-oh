<script>
import axios from 'axios';
import AppMainCardsItem from './AppMainCardsItem.vue';
export default {
  data() {
    return{
      monstersList:[],
       apiUrl:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0"
    }
   
   
  },
  methods:{
    getMonsters(){
      axios.get(this.apiUrl)
      .then((response) => {
        this.monstersList = response.data.data;
        console.dir(this.monstersList);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
  },
  components:{
    AppMainCardsItem,
  },
  created(){
    this.getMonsters();
  }
}
</script>

<template>
  <div class="deckContainer">

 
    <AppMainCardsItem v-for="monsterItem in monstersList" :key="monsterItem.id"
    :monsterObject="monsterItem"
    />
  </div>

</template>

<style scoped>
.deckContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>