const mutations = {
  SET_CURRENT_INDEX(state, index) {
    state.currentIndex = index;
  },
  INCREMENT_CURRENT_INDEX(state) {
    state.currentIndex++;
  },
  DECREMENT_CURRENT_INDEX(state) {
    state.currentIndex--;
  },
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  APPEND_TO_QUESTIONS(state, question) {
    state.questions = [...state.questions, question];
  },
  SET_SERVICE(state, service) {
    state.service = service;
  },
  CLEAR(state) {
    state.currentIndex = 0;
    state.questions = [];
    state.service = {};
  },
};

export default mutations;
