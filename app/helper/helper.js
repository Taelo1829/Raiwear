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
    if(window){
        let localStorage = window.localStorage;
        let user = JSON.parse(localStorage.getItem("currentUser") || "{}");
        return user;  
    }
}