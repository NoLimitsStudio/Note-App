import Vue from 'vue';
import Vuex from 'vuex';

import notes from './notes';
import priority from './priority';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes, priority,
  },
});
