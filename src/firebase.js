import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";

// firebase
const firebaseConfig = {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);