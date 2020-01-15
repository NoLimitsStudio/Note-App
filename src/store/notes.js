export default {
  state: {
    id: 4,
    notes: [
      {
        id: 1,
        title: 'First Note',
        descr: 'Despcription for first note',
        date: new Date(Date.now()).toLocaleString(),
        edit: false,
        priority: 'Standart',
      },
      {
        id: 2,
        title: 'Second Note',
        descr: 'Despcription for second note',
        date: new Date(Date.now()).toLocaleString(),
        edit: false,
        priority: 'Warm',
      },
      {
        id: 3,
        title: 'Third Note',
        descr: 'Despcription for third note',
        date: new Date(Date.now()).toLocaleString(),
        edit: false,
        priority: 'Hot',
      },
    ],
  },
  mutations: {
    addNote: (state, payload) => { state.notes.push(payload); state.id += 1; },
    removeNote: (state, payload) => state.notes.splice(payload, 1),
    updateNote: (state, payload) => {
      state.notes.forEach((e, index) => {
        if (e.id === payload.id) { state.notes[index] = payload; }
      });
    },
  },
  actions: {
    addNote: ({ commit }, payload) => commit('addNote', payload),
    removeNote: ({ commit }, payload) => commit('removeNote', payload),
    updateNote: ({ commit }, payload) => commit('updateNote', payload),
  },
  getters: {
    getNotes: state => state.notes,
    getId: state => state.id,
  },
};
