import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyCFSE0Pk55pQA5yxkKMPukUU8DDazWoIJ0",
  authDomain: "my-app-6b452.firebaseapp.com",
  projectId: "my-app-6b452",
  storageBucket: "my-app-6b452.appspot.com",
  messagingSenderId: "49675539004",
  appId: "1:49675539004:web:b7fb1396b28d361233e939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise auth and db
export const auth = getAuth(app);
export const db = getFirestore(app);
