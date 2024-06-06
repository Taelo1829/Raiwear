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
    if (typeof window !== 'undefined') {
        let location = localStorage.getItem("currentUser");
        if (location && location !== "undefined") {
            return JSON.parse(location);
        }
    }
}

export function   getTotal(arr){
  let total = 0;
  arr.forEach(item=>{
      total += parseInt(item.price?.replace("R",""))
  })
  return "R " +total
}

export function getLocalData(name){
  if(typeof window !== "undefined"){
    return localStorage.getItem(name)
  }
}

export function generateGui(){
  let letters = "1A2B3C4D5E6F7G8H9I0JKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let gui = "";
  let count = 0
  while(gui.length < 25){
    count ++
      gui += letters[Math.floor(Math.random() * letters.length)];
  }

  return gui
}

		
    