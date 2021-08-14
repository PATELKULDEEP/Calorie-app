import firebase from "firebase/app";

import "firebase/firestore"; // for cloud firestore

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDeNP28faLrDpqA9dMNcTQP9bZPSwkx9CA",
    authDomain: "calorie-apps.firebaseapp.com",
    projectId: "calorie-apps",
    storageBucket: "calorie-apps.appspot.com",
    messagingSenderId: "1044493980490",
    appId: "1:1044493980490:web:198f8099870a9dd8c467b3"
});

export const firestore = firebaseApp.firestore();
