// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey : "AIzaSyBsX5R0ZjYUb8oxK1WmV3eygn3liaiyUlE" , 
    authDomain : "fir-web-257b9.firebaseapp.com" , 
    projectId : "fir-web-257b9" , 
    storageBucket : "fir-web-257b9.firebasestorage.app" , 
    messagingSenderId : "123859775375" , 
    appId : "1:123859775375:web:64c652a93c4177103ca5fa" , 
    measurementId : "G-764QNGJT6R" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
