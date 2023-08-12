
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBS9BWqIlsmciVflUS3bVgV944boe6bURo",
  authDomain: "svelt-app.firebaseapp.com",
  projectId: "svelt-app",
  storageBucket: "svelt-app.appspot.com",
  messagingSenderId: "230001371803",
  appId: "1:230001371803:web:a0b548574f4e28e5efb43e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;
}

export const user = userStore();