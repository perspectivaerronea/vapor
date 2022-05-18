import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPrvrqPT52JeNIPALSjBAJL_AKpf519Gc",
  authDomain: "vapor-974df.firebaseapp.com",
  projectId: "vapor-974df",
  storageBucket: "vapor-974df.appspot.com",
  messagingSenderId: "371882924755",
  appId: "1:371882924755:web:a3d34e6a597ef6741ad226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

