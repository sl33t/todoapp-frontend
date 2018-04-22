<template>
  <header>
    <h1>Ricky Catron: TodoApp</h1>
    <g-signin-button
      v-if="!isLoggedIn"
      :params="googleSignInParams"
      @success="login"
      @error="onLoginError">
      Sign in with Google
    </g-signin-button>
    <div class="g-signin-button" @click="logout()" v-if="isLoggedIn">Logout</div>
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
    login (googleUser) {
      authApi.login(googleUser.getAuthResponse().id_token).then(() => {
        preloadApi.preloadAll().then(() => {
          this.$router.push('Dashboard')
        })
      }, () => {
        // Handle My Auth Failure
        console.log('My Auth Failure')
      })
    },
    onLoginError (error) {
      // Hanlde Googles Auth Failure
      console.log('Google Auth Failure', error)
    },
    logout () {
      authApi.logout()
      this.$router.push('Landing')
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--DARK-PRIMARY-COLOR);
    color: var(--WHITE-COLOR);
  }

  .g-signin-button {
    background-color: var(--ACCENT-COLOR);
    border-radius: .5rem;
    padding: .5rem .8rem;
    color: white;
    font-size: 1.2rem;
    box-shadow: 0 0 .1rem var(--PRIMARY-TEXT-COLOR);
  }

  .g-signin-button:active {
    background-color: var(--DARKER-ACCENT-COLOR);
  }
</style>
