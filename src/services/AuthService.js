export default class AuthService {
  authURL = 'https://elixirtodoapp.herokuapp.com/auth'
  jwt = ''

  login (googleProfile, googleIDToken) {
    return fetch(this.authURL + '/login',
      {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name: googleProfile.getName(),
            oauth_id: googleProfile.getId(),
            avatar: googleProfile.getImageUrl(),
            email: googleProfile.getEmail(),
            token: googleIDToken
          }
        }),
        headers: new Headers({
          'content-type': 'application/json'
        })
      }).then(response => response.json(), error => console.log(error))
  }

  logout () {
    return fetch(this.authURL + '/logout', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        'Authorization': this.jwt
      }
    }).then(response => response.json())
  }
}
