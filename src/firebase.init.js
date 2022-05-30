// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzc7yfVnmfAgTHIS8H8Y-jGZb6MS2TiQ",
  authDomain: "mrphotographer-4f212.firebaseapp.com",
  databaseURL:
    "https://mrphotographer-4f212-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrphotographer-4f212",
  storageBucket: "mrphotographer-4f212.appspot.com",
  messagingSenderId: "409551286761",
  appId: "1:409551286761:web:a2625c46210aeda8b91b78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
