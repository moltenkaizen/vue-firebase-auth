import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'
import router from './router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    user: {
      displayName: null,
      photoURL: null,
      email: null
    }
  },
  mutations: {
    loggedIn (state, user) {
      state.user.displayName = user.displayName
      state.user.photoURL = user.photoURL
      state.user.email = user.email
    },
    signOut (state) {
      state.user.displayName = null
      state.user.photoURL = null
      state.user.email = null
    }
  },
  actions: {
    signUp ({commit}, authData) {
      const email = authData.email
      const password = authData.password
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => alert('You account has been created'))
        .catch(error => alert(error.message))
    },
    signIn ({commit}) {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(data => {
          commit('loggedIn', data.user)
          router.replace('/')
        })
        .catch(error => console.log(error))
    },
    signOut ({commit}) {
      firebase.auth().signOut().then(() => {
        commit('signOut')
        router.replace('/login')
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.user.email !== null
    }
  }

})

export default store
