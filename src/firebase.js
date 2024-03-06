// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXO1cFB7wCF9eYo4-aIY17lxqkzevQoeI",
  authDomain: "realtor-clone-react-63d64.firebaseapp.com",
  projectId: "realtor-clone-react-63d64",
  storageBucket: "realtor-clone-react-63d64.appspot.com",
  messagingSenderId: "74311775369",
  appId: "1:74311775369:web:ee5244bd640a645d78c258"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()