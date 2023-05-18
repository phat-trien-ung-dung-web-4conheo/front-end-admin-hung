// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxxZuoP_ZdU06G2hqwFYCcIx85cSxU9A",
  authDomain: "shop-shoe-11401.firebaseapp.com",
  projectId: "shop-shoe-11401",
  storageBucket: "shop-shoe-11401.appspot.com",
  messagingSenderId: "323903952456",
  appId: "1:323903952456:web:02c2e80a4d69db08e8aa7d",
  measurementId: "G-9RXXK62G9M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
