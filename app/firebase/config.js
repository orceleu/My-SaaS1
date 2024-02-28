import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7A6WeWNFR6lsEqg7S1-as8FyduskZI38",
  authDomain: " my-saas-1.firebaseapp.com",
  projectId: "my-saas-1",
  storageBucket: "my-saas-1.appspot.com",
  messagingSenderId: "12375728041",
  appId: "1:12375728041:web:27d3a5b0e6379227996eb8",
  measurementId: " G-1DR2QMJ0GP",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp;
const auth = getAuth(app);
export { auth, app };
