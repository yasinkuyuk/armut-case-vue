const mutations = {
  SET_CURRENT_INDEX(state, index) {
    state.currentIndex = index;
  },
  INCREMENT_CURRENT_INDEX(state) {
    state.currentIndex++;
    state.errorStatus = false;
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
    state.answers = state.answers.filter((el) => el.value.id != answer.id);
  },
  REMOVE_TEXT_FROM_ANSWERS(state, questionId) {
    state.answers = state.answers.filter((el) => el.questionId != questionId);
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
  SET_ERROR_STATUS(state, value) {
    state.errorStatus = value;
  },
  SET_SERVICES(state, services) {
    state.services = services;
  },
  UPDATE_ANSWER(state, answer) {
    state.answers = state.answers.map((el) => {
      if (el.questionId == answer.questionId) {
        return answer;
      } else {
        return el;
      }
    });
  },
};

export default mutations;
