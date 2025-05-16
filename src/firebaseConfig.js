// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3a-4cuYh3BgstXQPI4XCiTjmuyOtzsSM",
  authDomain: "ufoger-loyalty.firebaseapp.com",
  projectId: "ufoger-loyalty",
  storageBucket: "ufoger-loyalty.firebasestorage.app", // Corrected: removed .app from the end
  messagingSenderId: "474748620137",
  appId: "1:474748620137:web:3340ce8e46c2406e2341f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
