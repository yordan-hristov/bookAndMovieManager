import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWLEP7obxVU65NBaZoxTINQI9NlyoSth0",
  authDomain: "bookandmoviemanager.firebaseapp.com",
  projectId: "bookandmoviemanager",
  storageBucket: "bookandmoviemanager.appspot.com",
  messagingSenderId: "9390253788",
  appId: "1:9390253788:web:bba2d5813827447fc63619",
  measurementId: "G-6R9XZX79TP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;