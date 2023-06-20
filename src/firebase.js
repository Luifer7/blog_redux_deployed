

// Inicaliza la appd e firebase
import { initializeApp } from "firebase/app";

//es el metodo ara autenticacion
import { getAuth } from "firebase/auth";

//es el metodo para la base de datos
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

//credencias
const firebaseConfig = {
    apiKey: "AIzaSyB5TK-3Pec6-i1pVCapeGwAjTmVnnHMZXw",
    authDomain: "blog-redux-51c80.firebaseapp.com",
    projectId: "blog-redux-51c80",
    storageBucket: "blog-redux-51c80.appspot.com",
    messagingSenderId: "157302568499",
    appId: "1:157302568499:web:0ad16e4c9068131857d546"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage}