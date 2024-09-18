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
        console.log(this.monstersList);
      })
      .catch((error) {
        console.log (error);
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

    <AppMainCardsItem/>
  

</template>

<style scoped>
</style>