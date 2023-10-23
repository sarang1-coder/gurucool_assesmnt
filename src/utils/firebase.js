// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9xxxBaeE4Yjo-444afAXWKE-AOS6PCUY",
  authDomain: "restaurantapp-f8db3.firebaseapp.com",
  projectId: "restaurantapp-f8db3",
  storageBucket: "restaurantapp-f8db3.appspot.com",
  messagingSenderId: "972083487613",
  appId: "1:972083487613:web:b33c5f8110987d6f1de214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const provider = new GoogleAuthProvider()