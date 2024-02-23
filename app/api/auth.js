import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyB0QLzsKYQ-sSvztuDqkQ8S_mHLT1g7e9Y",
  authDomain: "raiwear-d00a9.firebaseapp.com",
  projectId: "raiwear-d00a9",
  storageBucket: "raiwear-d00a9.appspot.com",
  messagingSenderId: "264902291798",
  appId: "1:264902291798:web:05e34506e4319fb1b7a6f7",
  measurementId: "G-GK80EBKM2L",
});

const auth = getAuth(app);

export async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error;
  }
}

export async function updateUser(userData) {
  try {
    let result = await updateProfile(auth.currentUser, {
      displayName: userData.firstName + " " + userData.lastName,
      receiveEmails: userData.receiveEmails,
      readPolicy: userData.readPolicy,
    });

    return result;
  } catch (error) {
    return error;
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error;
  }
}

export async function sendForgotPassword(email){
    try{
        const result = await sendPasswordResetEmail(auth,email)
        console.log(result)
        return result
    }catch(error){
        return error
    }
}
