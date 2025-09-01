// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_SENDER,
  appId:import.meta.env.VITE_FIREBASE_APPID,
  measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

const FirebaseApp=initializeApp(firebaseConfig);
// Initialize Firebase
export default FirebaseApp;