import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDU5JZ1Cfl9sO8SBraNAYJ49sJ8sWXP40c",
    authDomain: "rid-commerce.firebaseapp.com",
    databaseURL: "https://rid-commerce.firebaseio.com",
    projectId: "rid-commerce",
    storageBucket: "rid-commerce.appspot.com",
    messagingSenderId: "758817773861",
    appId: "1:758817773861:web:a3e11bfaee7821accfe2cc",
    measurementId: "G-DJ0ZK0D8SJ"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;