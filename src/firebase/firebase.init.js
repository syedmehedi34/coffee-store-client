// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL0IFRJd9STM7PqOBijO6RljaGhcnbSaQ",
  authDomain: "p-hero-10.firebaseapp.com",
  projectId: "p-hero-10",
  storageBucket: "p-hero-10.firebasestorage.app",
  messagingSenderId: "337522952567",
  appId: "1:337522952567:web:1d3bee0f1b91f0c3d77972",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
