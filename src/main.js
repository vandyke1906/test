import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAnH6PWV3E6pB81Jpv_4MOJNzJRexbzib4",
    authDomain: "simple-app-dbdd8.firebaseapp.com",
    projectId: "simple-app-dbdd8",
    storageBucket: "simple-app-dbdd8.appspot.com",
    messagingSenderId: "528354660695",
    appId: "1:528354660695:web:736bfcd91412170e8bae12",
    measurementId: "G-Q4SJQ9QFE9"
  };

firebase.initializeApp(firebaseConfig);

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function (err) {
        console.log('Service worker registration failed, error:', err);
      });
  }
};
registerServiceWorker();

// Vue.config.productionTip = false;


createApp(App).use(router).mount('#app')