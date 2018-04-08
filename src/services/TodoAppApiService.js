import AuthService from '@/services/AuthService'

export default class TodoAppApiService {
  constructor () {
    this.apiURL = 'https://elixirtodoapp.herokuapp.com/api'
    this.authService = new AuthService()
  }

  getTodos () {
    return fetch(this.apiURL + '/get',
      {
        method: 'GET',
        headers: new Headers({
          'Authorization': this.authService.getAuthToken(),
          'content-type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(json => json)
  }

  addTodo (todoText) {
    return fetch(this.apiURL + '/create',
      {
        method: 'POST',
        body: JSON.stringify({
          todolistitem: { text: todoText }
        }),
        headers: new Headers({
          'Authorization': this.authService.getAuthToken(),
          'content-type': 'application/json'
        })
      }).then(response => response.json())
  }

  editTodo (todoId, todoText) {
    return fetch(this.apiURL + '/edit/' + todoId,
      {
        method: 'PUT',
        body: JSON.stringify({
          todolistitem: { text: todoText }
        }),
        headers: new Headers({
          'Authorization': this.authService.getAuthToken(),
          'content-type': 'application/json'
        })
      }).then(response => response.json())
  }

  deleteTodo (todoId) {
    return fetch(this.apiURL + '/delete/' + todoId,
      {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': this.authService.getAuthToken(),
          'content-type': 'application/json'
        })
      }).then(response => response.json())
  }
}
