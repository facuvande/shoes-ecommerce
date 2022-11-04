import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyDFtTSqfQdkXOCEEZaldKDxvVNpEiv7W4I",
    authDomain: "coderhouse-ecommerce-f91a9.firebaseapp.com",
    projectId: "coderhouse-ecommerce-f91a9",
    storageBucket: "coderhouse-ecommerce-f91a9.appspot.com",
    messagingSenderId: "735114189173",
    appId: "1:735114189173:web:0d83fff6c2b1ec73fc1b3c"
};

// Conecto con Firebase
const app = initializeApp(firebaseConfig);

// Agarro la base de datos de mi proyecto de Firebase
export const db = getFirestore(app)