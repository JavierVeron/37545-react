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
  apiKey: "AIzaSyBBJKdQeUIEGsLjyRITRhzEjyAtdWUkIus",
  authDomain: "coderhouse-ecommerce-1535e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1535e",
  storageBucket: "coderhouse-ecommerce-1535e.appspot.com",
  messagingSenderId: "852640720692",
  appId: "1:852640720692:web:374a3211dd7e9ba786a761"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);