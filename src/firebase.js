// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVxXdpuwwM8Rptou11ACcbj68gExGj0Sg",
  authDomain: "ejercicio-en-clase-c4179.firebaseapp.com",
  projectId: "ejercicio-en-clase-c4179",
  storageBucket: "ejercicio-en-clase-c4179.appspot.com",
  messagingSenderId: "61769284084",
  appId: "1:61769284084:web:3141c95a3476b1bb4261a1",
  measurementId: "G-VTZ8DSSF9R"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);


