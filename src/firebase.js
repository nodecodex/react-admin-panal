import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panal-db.firebaseapp.com",
  projectId: "react-admin-panal-db",
  storageBucket: "react-admin-panal-db.appspot.com",
  messagingSenderId: "680633597907",
  appId: "1:680633597907:web:d8782697ba53082f4b7926"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
