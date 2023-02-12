export default {
  namespaced: true,
  state: {
    toggleStatus: false,
  },
  mutations: {
    TOGGLE_STATUS: (state, toggleStatus) => {
      state.toggleStatus = toggleStatus;
    },
  },
  getters: {
    toggleStatus: (state) => state.toggleStatus,
  },
};
