import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNShzCSLpDK0vc8bgIQWyEor6QlBp7N2M",
  authDomain: "test-9bc3a.firebaseapp.com",
  projectId: "test-9bc3a",
  storageBucket: "test-9bc3a.appspot.com",
  messagingSenderId: "604573608238",
  appId: "1:604573608238:web:3983777d362e0f78b3b2bf",
  measurementId: "G-WV65L0KW9V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
