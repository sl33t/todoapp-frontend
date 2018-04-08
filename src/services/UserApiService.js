import AuthService from '@/services/AuthService'

export default class UserApiService {
  constructor () {
    this.userURL = 'https://elixirtodoapp.herokuapp.com/user'
    this.authService = new AuthService()
  }

  getUser () {
    return fetch(this.userURL + '/get',
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
}
