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

async function getProducts(){
  let products = [];
  let results = await get(child(dbRef, `products`));
  if (results.exists()) {
    products = results.val();
  }
  return products.sort((a,b)=>{
    if(a.heading.toLowerCase() < b.heading.toLowerCase()) return -1;
    return 1
  });

}


async function getProductCategories(){
  let productCategories = [];
  let results = await get(child(dbRef, `productCategories`));
  if (results.exists()) {
    productCategories = results.val();
    if(!Array.isArray(productCategories)){
      productCategories = Object.values(productCategories);
    }
  }
  return productCategories.sort((a,b)=>{
    if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    return 1
  });

}

async function getProductSubcategories(){
  let productCategories = [];
  let results = await get(child(dbRef, `productSubcategories`));
  if (results.exists()) {
    productCategories = results.val();
    if(!Array.isArray(productCategories)){
      productCategories = Object.values(productCategories);
    }
  }
  return productCategories.sort((a,b)=>{
    if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    return 1
  });

}


async function getSizes(){
  let sizes = [];
  let results = await get(child(dbRef, `sizes`));
  if (results.exists()) {
    sizes = results.val();
  }
  return sizes.sort((a,b)=>{
    if(a.size.toLowerCase() < b.size.toLowerCase()) return -1;
    return 1
  });
}

async function getUserData(postData) {
  let user = {};
  let results = await get(child(dbRef, `users/${postData.uid}`));
  if (results.exists()) {
    user = results.val();
  }
  return user;
}

async function loadProduct(id){
  let product = {};
  let results = await get(child(dbRef, `products/${id}`));
  if (results.exists()) {
    product = results.val();
  }
  return product;

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

async function saveProductCategory(postData) {
  const prodRef = child(dbRef,`productCategories/${postData.id}`);
  try {
 await set(prodRef,{
    ...postData
  });
  return true
  } catch (error) {
    return false;
  }

}

async function saveProductSubcategory(postData) {
  const prodRef = child(dbRef,`productSubcategories/${postData.id}`);
  try {
 await set(prodRef,{
    ...postData
  });
  return true
  } catch (error) {
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

export {
  getProductCategories,getProducts, getSizes,getProductSubcategories,
  loadProduct,
  setUserData,saveProduct,saveProductCategory,saveProductSubcategory,saveSize
 };
