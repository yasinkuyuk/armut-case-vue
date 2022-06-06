import axios from "axios";

const actions = {
  async getServices({ commit }) {
    const resp = await axios.get(`/data/services.json`);
    commit("SET_SERVICES", resp.data);
  },
  async getQuestions({ commit }, serviceId) {
    const resp = await axios.get(`/data/${serviceId}-questions.json`);
    commit("SET_QUESTIONS", resp.data);
  },
};

export default actions;
