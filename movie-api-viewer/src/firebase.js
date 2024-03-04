// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWBYEtzgJTaKLvMzhjkrL4qCLPxz0q6Gs",
  authDomain: "react-disney-plus-app-be2de.firebaseapp.com",
  projectId: "react-disney-plus-app-be2de",
  storageBucket: "react-disney-plus-app-be2de.appspot.com",
  messagingSenderId: "972152988227",
  appId: "1:972152988227:web:025bb8eddd07dad5d26af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;