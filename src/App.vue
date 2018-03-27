<template>
  <div id="app">
    <img src="./assets/logo.png">
    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>
    <router-view/>
  </div>
</template>

<script>
import AuthService from './services/AuthService.js'

const authApi = new AuthService('')

export default {
  name: 'App',
  data () {
    return {
      googleSignInParams: {
        client_id: '521235560619-5f9qp1hfo83vgabmc0or4ce66b110114.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      const idToken = googleUser.getAuthResponse().id_token
      authApi.login(profile, idToken).then(resp => {
        console.log(resp)
      }, () => {
        console.log('failllll')
      })
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
