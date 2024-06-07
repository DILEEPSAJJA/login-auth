import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy_vJlLM6IcB9mokAgrSyUHlyt4hwyapI",
  authDomain: "login-auth-458e3.firebaseapp.com",
  projectId: "login-auth-458e3",
  storageBucket: "login-auth-458e3.appspot.com",
  messagingSenderId: "334020359761",
  appId: "1:334020359761:web:bea69b21b2dcdc03a1ea70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

// firebase.js
/*
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVFO9QhTnXFCfmOY0DbwnvD5b33IuRqA",
  authDomain: "test-app-f5a46.firebaseapp.com",
  projectId: "test-app-f5a46",
  storageBucket: "test-app-f5a46.appspot.com",
  messagingSenderId: "170224857335",
  appId: "1:170224857335:web:0c9b1ada9993b93b88a3f2",
  measurementId: "G-ZC90PVQFBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

*/

// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAhVFO9QhTnXFCfmOY0DbwnvD5b33IuRqA",
//   authDomain: "test-app-f5a46.firebaseapp.com",
//   projectId: "test-app-f5a46",
//   storageBucket: "test-app-f5a46.appspot.com",
//   messagingSenderId: "170224857335",
//   appId: "1:170224857335:web:0c9b1ada9993b93b88a3f2",
//   measurementId: "G-ZC90PVQFBJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);

// export const auth=getAuth();
// export const db=getFirestore(app);
// export default app;
