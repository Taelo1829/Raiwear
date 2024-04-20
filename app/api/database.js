import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { createUser } from "./auth";

const app = initializeApp({
  apiKey: "AIzaSyB0QLzsKYQ-sSvztuDqkQ8S_mHLT1g7e9Y",
  authDomain: "raiwear-d00a9.firebaseapp.com",
  projectId: "raiwear-d00a9",
  storageBucket: "raiwear-d00a9.appspot.com",
  messagingSenderId: "264902291798",
  appId: "1:264902291798:web:05e34506e4319fb1b7a6f7",
  measurementId: "G-GK80EBKM2L",
});
const dbRef = ref(getDatabase());

async function getUserData(postData) {
  let user = {};
  let results = await get(child(dbRef, `users/${postData.uid}`));
  if (results.exists()) {
    user = results.val();
  }
  return user;
}

async function saveProduct(postData) {
  const prodRef = child(dbRef,`products/${postData.id}`);
  try {
 await set(prodRef,{
    ...postData
  });
  return true
  } catch (error) {
    return false;
  }
}

async function saveSize(postData) {
  const sizeRef = child(dbRef,`sizes/${postData.id}`);
  try {
 await set(sizeRef,{
    ...postData
  });
  return true
  } catch (error) {
    console.error(error)
    return false;
  }

}

async function setUserData(postData) {
  try {
     await getUserData(postData);
  } catch (error) {
    return error;
  }
}

export { setUserData,saveProduct,saveSize };
