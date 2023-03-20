impr
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcMlLBGHJelDG5atSwNtT1dliIzvYnX1Y",
  authDomain: "twitter-clone-bb1a6.firebaseapp.com",
  projectId: "twitter-clone-bb1a6",
  storageBucket: "twitter-clone-bb1a6.appspot.com",
  messagingSenderId: "899552526759",
  appId: "1:899552526759:web:73a4f81632b8f1e5b83682",
  measurementId: "G-98L27CH37Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firebaseSore()
export default db

