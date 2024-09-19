import { reactive } from "vue";
    const store = reactive({
    searchText:'',
    loaded:true,
monstersList : [],
archetypes : [],
selectedArchetype:''
});
export default store;