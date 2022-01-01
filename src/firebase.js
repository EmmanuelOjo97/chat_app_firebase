import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIsIsDKChMZaJV45lWwUm8ZzmutC_EM6E",
  authDomain: "learning-firebase-6331e.firebaseapp.com",
  projectId: "learning-firebase-6331e",
  storageBucket: "learning-firebase-6331e.appspot.com",
  messagingSenderId: "660460053765",
  appId: "1:660460053765:web:46d5bf68305d1f313b036c",
  measurementId: "G-B43BXR417Z",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const db = getFirestore();

// export const auth = getAuth(app);
