// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAxZCO_90c_u_sy_hFJIHM_f63bcuII0i8",

  authDomain: "urielsprouts.firebaseapp.com",

  projectId: "urielsprouts",

  storageBucket: "urielsprouts.appspot.com",

  messagingSenderId: "918237905636",

  appId: "1:918237905636:web:2384e0e08a6469868de2f1",

  measurementId: "G-2X341TL8LK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export  const storage = getStorage(app)

export const auth = getAuth()

export default firebaseConfig


