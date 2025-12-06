// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUjCplurh2jBpKlDXk_HJCGwQDWwFTt3c",
  authDomain: "netflix-gpt-2c44c.firebaseapp.com",
  projectId: "netflix-gpt-2c44c",
  storageBucket: "netflix-gpt-2c44c.firebasestorage.app",
  messagingSenderId: "834768575249",
  appId: "1:834768575249:web:e57c0a9c86a43ca12ecab0",
  measurementId: "G-9JNJW2Z1KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
