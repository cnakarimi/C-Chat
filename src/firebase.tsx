// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3muPa61_3vIw_Tqv65GJ4I_8CtRgRBqg",
  authDomain: "c-chat-d1ed5.firebaseapp.com",
  projectId: "c-chat-d1ed5",
  storageBucket: "c-chat-d1ed5.appspot.com",
  messagingSenderId: "697445951879",
  appId: "1:697445951879:web:61ec9a895c6e44cb3c4b22",
  measurementId: "G-DKHV4CE65P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
