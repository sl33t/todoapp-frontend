// initial state
const state = {
  todos: []
}

// getters
const getters = {
  todos: state => state.todos
}

// actions
const actions = {
}

// mutations
const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
