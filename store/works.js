const obj = {
  state: {
    works: []
  },
  getters: {
    works(state) {
      return state.works
    }
  },
  mutations: {
    SET_WORKS(state, request) {
      state.works = request
    }
  },
  actions: {
    async get_works({ commit }) {
      const data = await this.$strapi.find('works');
      commit('SET_WORKS', data)
    }
  }
}

export const state = () => (obj.state)
export const getters = obj.getters
export const actions = obj.actions
export const mutations = obj.mutations