<template>
  <div>
    <h3>Sign Up</h3>
    <form @submit.prevent="signUp">
      <input type="text" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button>Sign Up</button>
      <p>Already have an account? <router-link to="/login">Log In</router-link></p>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', { email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped>

</style>
