import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Conecto con Firebase
const app = initializeApp(firebaseConfig);

// Agarro la base de datos de mi proyecto de Firebase
export const db = getFirestore(app)