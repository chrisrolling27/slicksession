// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCOpQ5pxs-3SgdxlNMWObZLKnKuaQ2b8kY",
  authDomain: "poaster-be80b.firebaseapp.com",
  projectId: "poaster-be80b",
  storageBucket: "poaster-be80b.appspot.com",
  messagingSenderId: "900377375418",
  appId: "1:900377375418:web:c80113fffa0da0b602c883",
  measurementId: "G-E6ETKPBD2Y"
};

// Initialize Firebase
const connect = initializeApp(firebaseConfig);

module.exports = connect;
