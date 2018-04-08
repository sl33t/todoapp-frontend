import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import todos from './modules/todos'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user: user,
    todos: todos
  },
  strict: debug
})
