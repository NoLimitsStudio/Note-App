export default {
  state: {
    priority: 'Standart',
  },
  mutations: {
    setPriority(state, payload) { state.priority = payload; },
  },
  actions: {
    setPriority: ({ commit }, payload) => commit('setPriority', payload),
  },
  getters: {
    getPriority: state => state.priority,
  },
};
