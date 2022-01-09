import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { createUser } from "./api/user";

export async function signUp(fullName,email, password) {
    await createUser(fullName,email);
    await createUserWithEmailAndPassword(auth,email,password);
}

export async function logout() {
    await signOut(auth);
}

export async function singIn(email, password) {
    await signInWithEmailAndPassword(auth,email,password);
}