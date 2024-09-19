<script>
import store from '../store'
export default {
  data() {
    return {
      store,
      
    }
  },
}
</script>

<template>
<div class="headerContainer">
  <h1>Yu-Gi-Oh Api</h1>
  <div class="selectArchetype">
    <select id="archetipo-select">
       <option value="" disabled selected>Seleziona un archetipo</option>
       <option value=""></option>
        </select>
  </div>
  <div class="monsterNumberContainer">
    <h3>Carte trovate:{{ store.monstersList.length }}</h3>
</div>


</div>
</template>

<style lang="scss" scoped>
.headerContainer {
  min-height: 50px;
}
.monsterNumberContainer {
  min-height: 50px;
  color: white;
  background-color: black;
}
</style>