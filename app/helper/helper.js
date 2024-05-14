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

    
// export async function sendEmail({ to, from, subject, message }) {
//   const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
//   sendSmtpEmail.sender = { name: from, email: from };
//   sendSmtpEmail.to = [{ email: to }];
//   sendSmtpEmail.subject = subject;
//   sendSmtpEmail.htmlContent = message;

//   try {
//     await sendinblueClient.sendTransacEmail(sendSmtpEmail);
//     return('Email sent successfully!');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// }

		
    