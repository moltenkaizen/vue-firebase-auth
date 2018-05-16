<template>
    <div>
      <h3>Sign In with Google</h3>
        <button @click="signInWithGoogle">Sign in</button>
        <br/>
        <button @click="checkAuth">console.log() Auth Object</button>
    </div>
</template>

<script>
import firebase from '../firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signInWithGoogle () {
      this.$store.dispatch('signIn')
    },
    checkAuth () {
      console.log(firebase.auth().currentUser)
    }
  }
}
</script>

<style scoped>

</style>
