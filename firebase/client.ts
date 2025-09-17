// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqgJ_-Z2VWlE-1k3Sd0_ciwgxIib38oc",
  authDomain: "prepwise-65cd1.firebaseapp.com",
  projectId: "prepwise-65cd1",
  storageBucket: "prepwise-65cd1.firebasestorage.app",
  messagingSenderId: "1035803910448",
  appId: "1:1035803910448:web:19b8eee18c9b178e56e8f5",
  measurementId: "G-RBRVX1PWXV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);