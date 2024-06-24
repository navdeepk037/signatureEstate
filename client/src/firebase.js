// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "signature-estate-a53c6.firebaseapp.com",
  projectId: "signature-estate-a53c6",
  storageBucket: "signature-estate-a53c6.appspot.com",
  messagingSenderId: "672794751872",
  appId: "1:672794751872:web:136efbad7b11496e6c4765"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);