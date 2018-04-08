<template>
  <header>
    <img src="../assets/logo.png">
    <g-signin-button
      v-if="!isLoggedIn"
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>
    <button @click="logout()" v-if="isLoggedIn">Logout</button>
  </header>
</template>

<script>
import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'
import AuthService from '@/services/AuthService'
import PreloadService from '@/services/PreloadService'

const preloadApi = new PreloadService()
const authApi = new AuthService()

Vue.use(GSignInButton)

export default {
  name: 'Header',
  data () {
    return {
      googleSignInParams: {
        client_id: '521235560619-5f9qp1hfo83vgabmc0or4ce66b110114.apps.googleusercontent.com'
      }
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['user/isAuthenticated']
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      authApi.login(googleUser.getAuthResponse().id_token).then(() => {
        preloadApi.preloadAll().then(() => {
          this.$router.push('Dashboard')
        })
      }, () => {
        // Handle My Auth Failure
        console.log('My Auth Failure')
      })
    },
    onSignInError (error) {
      // Hanlde Googles Auth Failure
      console.log('Google Auth Failure', error)
    },
    logout () {
      authApi.logout()
      this.$store.commit('user/logout')
      this.$router.push('Landing')
    }
  }
}
</script>

<style scoped>
.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
