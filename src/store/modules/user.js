// initial state
const state = {
  user: {
    name: '',
    email: '',
    avatar: ''
  },
  isAuthenticated: false
}

// getters
const getters = {
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  email: state => state.user.email,
  fullUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}

// actions
const actions = {
}

// mutations
const mutations = {
  logout (state) {
    state.isAuthenticated = false
  },
  setUser (state, user) {
    state.user = Object.assign({}, state.user, user)
    state.isAuthenticated = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
