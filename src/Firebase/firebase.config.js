// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhMFHQcx1jyQbX3wGzhkKqrLxJB8OXJOA",
  authDomain: "task-manager-36985.firebaseapp.com",
  projectId: "task-manager-36985",
  storageBucket: "task-manager-36985.appspot.com",
  messagingSenderId: "913495958228",
  appId: "1:913495958228:web:08d785952946e29f4d5141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;