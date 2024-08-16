// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClgsgBywAseuS8oMJ_Pi-jKfrS6wWlhlA",
  authDomain: "pantry-app-14319.firebaseapp.com",
  projectId: "pantry-app-14319",
  storageBucket: "pantry-app-14319.appspot.com",
  messagingSenderId: "459036749075",
  appId: "1:459036749075:web:444a9ba1183a59e71fbee6",
  measurementId: "G-F7M4YWHKR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)


export{app, firestore}