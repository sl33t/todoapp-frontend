import AuthService from '@/services/AuthService'
import UserApiService from '@/services/UserApiService'
import TodoAppApiService from '@/services/TodoAppApiService'
import store from '@/store'

export default class PreloadService {
  constructor () {
    this.authService = new AuthService()
    this.userApi = new UserApiService()
    this.todoApi = new TodoAppApiService()
    this.store = store
  }

  preloadAll () {
    return Promise.all([this.preloadTodos(), this.preloadUser()])
  }

  preloadUser () {
    return this.userApi.getUser().then(user => {
      this.store.commit('user/setUser', user)
    })
  }

  preloadTodos () {
    return this.todoApi.getTodos().then(todos => {
      this.store.commit('todos/setTodos', todos)
    })
  }
}
