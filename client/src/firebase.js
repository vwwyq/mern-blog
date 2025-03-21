// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-33843.firebaseapp.com",
  projectId: "mern-blog-33843",
  storageBucket: "mern-blog-33843.firebasestorage.app",
  messagingSenderId: "1009983466889",
  appId: "1:1009983466889:web:5c3599bcf7834cbea20558"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);