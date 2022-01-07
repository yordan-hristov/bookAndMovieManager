import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}