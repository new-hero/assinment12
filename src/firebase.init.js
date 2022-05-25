// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeeSKi_Ds_vOwJqOQ_vALlf8lEahJZ80o",
  authDomain: "toolsservice-cbc33.firebaseapp.com",
  projectId: "toolsservice-cbc33",
  storageBucket: "toolsservice-cbc33.appspot.com",
  messagingSenderId: "14567223956",
  appId: "1:14567223956:web:ebfc77bcdda36ea7393a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app