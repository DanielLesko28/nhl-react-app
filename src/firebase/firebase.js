// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaj800YHz5l7LWGTy3cURoi6f_0DQenxo",
  authDomain: "nhl-app-eb05f.firebaseapp.com",
  projectId: "nhl-app-eb05f",
  storageBucket: "nhl-app-eb05f.appspot.com",
  messagingSenderId: "853860122574",
  appId: "1:853860122574:web:07d982fa6e805fb4d5359f",
  measurementId: "G-8E1ZGYHHV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
