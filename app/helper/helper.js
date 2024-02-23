"use client"
export function fieldValidation(id, field) {
    let element = document.getElementById(id);
  if (!field) {
    element.style.color = "red";
    element.innerHTML = "*";
    return false;
  } else {
    element.innerHTML = "";
    return true;
  }
}


export function getUserDetails() {
    // if (typeof window !== 'undefined') {
    //     let location = localStorage.getItem("currentUser");
    //     if (location && location !== "undefined") {
    //         return JSON.parse(location);
    //     }
    // }
}