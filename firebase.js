// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChY6E-9o0tszhSKyeaJBiMxMkTE0yHM24",
  authDomain: "login-2b1e2.firebaseapp.com",
  databaseURL: "https://login-2b1e2-default-rtdb.firebaseio.com",
  projectId: "login-2b1e2",
  storageBucket: "login-2b1e2.appspot.com",
  messagingSenderId: "939836499954",
  appId: "1:939836499954:web:1eb72534d267f1672cad6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export { db };
