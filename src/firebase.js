// import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyAnH6PWV3E6pB81Jpv_4MOJNzJRexbzib4",
//     authDomain: "simple-app-dbdd8.firebaseapp.com",
//     projectId: "simple-app-dbdd8",
//     storageBucket: "simple-app-dbdd8.appspot.com",
//     messagingSenderId: "528354660695",
//     appId: "1:528354660695:web:736bfcd91412170e8bae12",
//     measurementId: "G-Q4SJQ9QFE9"
//   };

// var fire = firebase.initializeApp(firebaseConfig);

// const database = firebase.firestore();

// database.settings({
//   timestampsInSnapshots: true
// });

// database.enablePersistence();

// const userCollection = database.collection("users");



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

const database = firebase.firestore();

database.settings({
  timestampsInSnapshots: true
});

database.enablePersistence();

const userCollection = database.collection("users");
const _user = {
  email: "test@test.com",
  fullname: "adssad as dsad",
  username: "vandyke1906"
}
userCollection.add(_user);
