export default class TodoAppApiService {
  apiURL = 'https://elixirtodoapp.herokuapp.com/api'

  constructor (jwt) {
    this.jwt = jwt
  }

  getTodos () {
    return fetch(this.apiURL + '/get',
      {
        method: 'GET',
        headers: {
          'Authorization': this.jwt,
          'content-type': 'application/json'
        }
      }).then(response => response.json())
  }

  addTodo (todoText) {
    return fetch(this.apiURL + '/create',
      {
        method: 'POST',
        body: {
          todolistitem: { text: todoText }
        },
        headers: {
          'Authorization': this.jwt,
          'content-type': 'application/json'
        }
      }).then(response => response.json())
  }

  editTodo (todoText) {
    return fetch(this.apiURL + '/edit/',
      {
        method: 'PUT',
        body: {
          todolistitem: { text: todoText }
        },
        headers: {
          'Authorization': this.jwt,
          'content-type': 'application/json'
        }
      }).then(response => response.json())
  }

  deleteTodo (todoId) {
    return fetch(this.apiURL + '/delete/' + todoId,
      {
        method: 'DELETE',
        headers: {
          'Authorization': this.jwt,
          'content-type': 'application/json'
        }
      }).then(response => response.json())
  }

}
