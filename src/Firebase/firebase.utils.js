import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "YOUR-API-KEY",
    authDomain: "rid-commerce.firebaseapp.com",
    databaseURL: "https://rid-commerce.firebaseio.com",
    projectId: "rid-commerce",
    storageBucket: "rid-commerce.appspot.com",
    messagingSenderId: "758817773861",
    appId: "1:758817773861:web:a3e11bfaee7821accfe2cc",
    measurementId: "G-DJ0ZK0D8SJ"
  }

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
