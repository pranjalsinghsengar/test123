// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNShzCSLpDK0vc8bgIQWyEor6QlBp7N2M",
  authDomain: "test-9bc3a.firebaseapp.com",
  projectId: "test-9bc3a",
  storageBucket: "test-9bc3a.appspot.com",
  messagingSenderId: "604573608238",
  appId: "1:604573608238:web:3983777d362e0f78b3b2bf",
  measurementId: "G-WV65L0KW9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
