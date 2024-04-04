// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "blog-app-558ae.firebaseapp.com",
  projectId: "blog-app-558ae",
  storageBucket: "blog-app-558ae.appspot.com",
  messagingSenderId: "818904327376",
  appId: "1:818904327376:web:9db6868d3e1e853731aad5",
  measurementId: "G-0HGHC5LW6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}