import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0CWd8QAFPOFFymFBY_zOhePFz9ioF0Q4",
  authDomain: "pet-bond-proj.firebaseapp.com",
  projectId: "pet-bond-proj",
  storageBucket: "pet-bond-proj.appspot.com",
  messagingSenderId: "155625219839",
  appId: "1:155625219839:web:67d74bb0209a2079968eca",
  measurementId: "G-RHJXBHN7H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
