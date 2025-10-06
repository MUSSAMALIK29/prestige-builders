// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUxDDBasRmRM-s-BRUv9Z3-xYW0CD9YOY",
  authDomain: "prestige-builders.firebaseapp.com",
  projectId: "prestige-builders",
  storageBucket: "prestige-builders.firebasestorage.app",
  messagingSenderId: "319194841257",
  appId: "1:319194841257:web:64d7b2add83fe9d66be9b8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
