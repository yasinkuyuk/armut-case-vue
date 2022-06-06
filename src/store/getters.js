const getters = {
  currentIndex(state) {
    return state.currentIndex;
  },
  questions(state) {
    return state.questions;
  },
  service(state) {
    return state.service;
  },
  answers(state) {
    return state.answers;
  },
  errorStatus(state) {
    return state.errorStatus;
  },
  services(state) {
    return state.services;
  },
};

export default getters;
