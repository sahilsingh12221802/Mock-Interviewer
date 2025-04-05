import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC5BzPd59ePNn0eJ7UD7gM4AcNg3uutxjY",
  authDomain: "aiprepview.firebaseapp.com",
  projectId: "aiprepview",
  storageBucket: "aiprepview.firebasestorage.app",
  messagingSenderId: "112474412128",
  appId: "1:112474412128:web:700ab2803728dea89bdf05",
  measurementId: "G-YZ8BQF916M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);