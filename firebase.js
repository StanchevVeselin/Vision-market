// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZqngnJXWyNE_uLlCRoYCG9EqkGNwx6Q",
  authDomain: "vitamins-aba4e.firebaseapp.com",
  projectId: "vitamins-aba4e",
  storageBucket: "vitamins-aba4e.appspot.com",
  messagingSenderId: "885929980511",
  appId: "1:885929980511:web:3d56b55a648b2c314421ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const collVitamins = collection(db,"vitamins")
const collOrders = collection(db,"orders")
const auth = getAuth()

export {collVitamins, collOrders, auth, addDoc} 