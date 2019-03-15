import vue from "vue";
import vuex from "vuex";
vue.use(vuex);
const state = {
    Count:10
}
const store = new vuex.Store({
    state,
    mutations : {
        newNumber(state,Count){
            state.Count = Count
        }
    }
});
export default store;