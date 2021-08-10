const obj = {
  state: {
    reviews: [
      // {
      //   url: 'https://5bucks.ru/wp-content/uploads/2020/08/676191594604b17991d529aa0a1395ce.jpg'
      // },
      // {
      //   url: 'https://5bucks.ru/wp-content/uploads/2020/08/676191594604b17991d529aa0a1395ce.jpg'
      // },
      // {
      //   url: 'https://5bucks.ru/wp-content/uploads/2020/08/676191594604b17991d529aa0a1395ce.jpg'
      // },
      // {
      //   url: 'https://5bucks.ru/wp-content/uploads/2020/08/676191594604b17991d529aa0a1395ce.jpg'
      // },
      // {
      //   url: 'https://5bucks.ru/wp-content/uploads/2020/08/676191594604b17991d529aa0a1395ce.jpg'
      // },
    ]
  },
  getters: {
    reviews(state) {
      return state.reviews
    }
  },
  mutations: {
    SET_REVIEWS(state, request) {
      state.reviews = request
    }
  },
  actions: {
    async get_reviews({ commit }) {
      const data = await this.$strapi.find('reviews');
      let reviews = data.map(({ review }) => {
        return review
      });
      commit('SET_REVIEWS', reviews)
    }
  }
}

export const state = () => (obj.state)
export const getters = obj.getters
export const actions = obj.actions
export const mutations = obj.mutations