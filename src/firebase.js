import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDThfiVJipF-WMQUtRXpz-MJjrcTNnPis",
  authDomain: "locked-in-74bad.firebaseapp.com",
  projectId: "locked-in-74bad",
  storageBucket: "locked-in-74bad.appspot.com",
  messagingSenderId: "633683193491",
  appId: "1:633683193491:web:514bccf41c1ae2b2502766"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);