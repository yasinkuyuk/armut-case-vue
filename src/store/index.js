import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
