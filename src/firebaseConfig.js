// // firebase.js or firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "yudevx-53074",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "xxxxxx",
//   appId: "xxxxxx"
// };

// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOCpkpVCUJOwbPjiLnJ3q1uEgGA2SPDMw",
  authDomain: "yudevx-53074.firebaseapp.com",
  projectId: "yudevx-53074",
  storageBucket: "yudevx-53074.firebasestorage.app",
  messagingSenderId: "91075718293",
  appId: "1:91075718293:web:44aabc9ed0620ea03c3f9c",
  measurementId: "G-J97HP6L830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
