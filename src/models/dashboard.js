export default {
  namespace: 'dashboard',
  state: {
    count: 0
  },
  getters: {
    countString: state => `${state.count}111`
  },
  mutations: {
    save (state, { count }) {
      state.count = count
    }
  },
  actions: {
    async add ({commit, state}) {
      commit('save', {count: state.count + 1})
    },
    async minus ({commit, state}) {
      commit('save', {count: state.count - 1})
    }
  }
}
