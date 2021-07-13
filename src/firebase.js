import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3xS6cQPZwonQU2AjQygE3Yqi0pZ3ks1Q",
    authDomain: "appchat-ea274.firebaseapp.com",
    projectId: "appchat-ea274",
    storageBucket: "appchat-ea274.appspot.com",
    messagingSenderId: "9216197927",
    appId: "1:9216197927:web:72984aa30aff9240e05502",
    measurementId: "G-TJJYZK4E2N"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }