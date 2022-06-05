const mutations = {
  SET_CURRENT_INDEX(state, index) {
    state.currentIndex = index;
  },
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  APPEND_TO_QUESTIONS(state, question) {
    state.questions = [...state.questions, question];
  },
};

export default mutations;
