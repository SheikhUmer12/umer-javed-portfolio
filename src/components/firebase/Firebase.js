// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4r6okqtfWNwhPdEeW0XVHcJ_4kqaJk-A",
  authDomain: "portfolio-d2549.firebaseapp.com",
  projectId: "portfolio-d2549",
  storageBucket: "portfolio-d2549.appspot.com",
  messagingSenderId: "847341516816",
  appId: "1:847341516816:web:a452586888db11baf17295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
