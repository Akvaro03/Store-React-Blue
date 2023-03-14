// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU3nDfoymcj_ttRC1U0nKE5cl8dZX27m4",
  authDomain: "blustore-5ffee.firebaseapp.com",
  projectId: "blustore-5ffee",
  storageBucket: "blustore-5ffee.appspot.com",
  messagingSenderId: "45416360362",
  appId: "1:45416360362:web:b71d09f753e9cd2a1d23d3",
  measurementId: "G-70SQD0WRCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

