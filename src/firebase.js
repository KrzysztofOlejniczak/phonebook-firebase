// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPASyn_YaVhA2w087g-NmV4Akn5Ox0_ok",
  authDomain: "phonebook-b4895.firebaseapp.com",
  projectId: "phonebook-b4895",
  storageBucket: "phonebook-b4895.appspot.com",
  messagingSenderId: "247273006161",
  appId: "1:247273006161:web:f6e83979a59028242b8470",
  measurementId: "G-8820ZPDJGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
};
