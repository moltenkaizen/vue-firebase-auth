# vue-firebase-auth

> A Vue.js demo project to show how to using Firebase Auth. Currently only using the Google Auth provider.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

To get firebase working, you'll need to provide your a firebase config file `src/config.js`
##### Example:
```
const firebaseConfig = {
  apiKey: 'asdfasdfasdfasdfasdf',
  authDomain: 'asdfasdfasdfasdf.firebaseapp.com',
  databaseURL: 'https://asdfasdfsdaf.firebaseio.com',
  projectId: 'asdfasdfasd',
  storageBucket: 'vasdfasdfasdf.appspot.com',
  messagingSenderId: 'asdfasdf'
}

export default firebaseConfig
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
