export default class AuthService {
  constructor () {
    this.authURL = 'https://elixirtodoapp.herokuapp.com/auth'
  }

  login (googleIDToken) {
    return fetch(this.authURL + '/login',
      {
        method: 'POST',
        body: JSON.stringify({
          token: googleIDToken
        }),
        headers: new Headers({
          'content-type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(jsonResp => {
        localStorage.setItem('authToken', jsonResp.jwt)
      })
  }

  isLoggedIn () {
    return this.getAuthToken() !== null
  }

  getAuthToken () {
    return localStorage.getItem('authToken')
  }

  logout () {
    localStorage.removeItem('authToken')
  }
}
