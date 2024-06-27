// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdcYtbHScEIEN32ZRMHdDYtCSPoxtX7E",
  authDomain: "react-chat-app-94983.firebaseapp.com",
  projectId: "react-chat-app-94983",
  storageBucket: "react-chat-app-94983.appspot.com",
  messagingSenderId: "417169046718",
  appId: "1:417169046718:web:342d4501fef962640a72ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
