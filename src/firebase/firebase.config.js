// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLk6-G6CMIW0IB6VjKynMmWvxJVgaOOJ4",
  authDomain: "Gadget-shop.firebaseapp.com",
  projectId: "Gadget-shop",
  storageBucket: "Gadget-shop.appspot.com",
  messagingSenderId: "186431319359",
  appId: "1:186431319359:web:4bebfb78a3d8fc9674378a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;