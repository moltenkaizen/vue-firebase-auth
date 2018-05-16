<template>
  <div class="hello">
    <div v-if="isAuthenticated">
      <p >Is Logged In</p>
      <h3>You're signed in as {{ user.email }}</h3>
      <img class="round-profile" :src="user.photoURL" alt="Profile Image">
      <br/>
      <button @click="signOut">Sign Out</button>
    </div>
    <button @click="checkAuth">console.log() Auth Object</button>
  </div>
</template>

<script>
import firebase from '../firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: null
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    },
    checkAuth () {
      console.log(firebase.auth().currentUser)
    }
  },
  created () {
    // this.user = firebase.auth().currentUser
    // firebase.auth().onAuthStateChanged(user => { this.user = user })
    this.user = this.$store.getters.user
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .round-profile {
    border-radius: 50%;
  }
</style>
