import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAZbpQ2LnztzKI0fMa2nEkgsoFOTCMqMK0",
  authDomain: "essntl-clothing.firebaseapp.com",
  projectId: "essntl-clothing",
  storageBucket: "essntl-clothing.appspot.com",
  messagingSenderId: "154010783642",
  appId: "1:154010783642:web:d7d876587f75a5cf207423",
  measurementId: "G-JZ8HYMS19D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
