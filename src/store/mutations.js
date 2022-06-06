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
  APPEND_TO_ANSWERS(state, answer) {
    state.answers = [...state.answers, answer];
  },
  REMOVE_FROM_ANSWERS(state, answer) {
    console.log("remove");
    console.log(state.answers);
    state.answers = state.answers.filter((el) => el.value.id != answer.id);
    console.log(state.answers);
  },
  SET_SERVICE(state, service) {
    state.service = service;
  },
  CLEAR(state) {
    state.currentIndex = 0;
    state.questions = [];
    state.service = {};
    state.answers = [];
  },
};

export default mutations;
