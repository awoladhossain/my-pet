// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "my-pet-7025b.firebaseapp.com",
  projectId: "my-pet-7025b",
  storageBucket: "my-pet-7025b.appspot.com",
  messagingSenderId: "884040667820",
  appId: "1:884040667820:web:d15488a8856343dd3d8509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
