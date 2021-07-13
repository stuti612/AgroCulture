//import Rebase from 're-base';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-JSI_Ao8nELUZm8MC2JRGYVLhnGr7vgw",
  authDomain: "agroculture-26b06.firebaseapp.com",
  projectId: "agroculture-26b06",
  storageBucket: "agroculture-26b06.appspot.com",
  messagingSenderId: "229779851568",
  appId: "1:229779851568:web:12c621de2944e025af60f5",
  measurementId: "G-0GB21LEDRG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default firebase;
