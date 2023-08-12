
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";


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

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();