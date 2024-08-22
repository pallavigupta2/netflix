// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dyTuy8SWVu0ZI1enBUVs5OOgXAxcfZQ",
  authDomain: "netflix-624fe.firebaseapp.com",
  projectId: "netflix-624fe",
  storageBucket: "netflix-624fe.appspot.com",
  messagingSenderId: "551355880353",
  appId: "1:551355880353:web:b96993fd5713edbb5471e0",
  measurementId: "G-2HDB6FE3DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
