"use strict";

const phonePreference = document.getElementById("phone-preference");
const emailPreference = document.getElementById("email-preference");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

function formRequire(){         //this function checks which contact method the user prefers between email and phone, and requires them to fill out the form section for their selection.
    if(phonePreference.checked){
        phoneInput.required = true;
        emailInput.required = false;
    }else if(emailPreference.checked){
        emailInput.required = true;
        phoneInput.required = false;
    }else{
        phoneInput.required = false;
        emailInput.required = false;
    }
}

phonePreference.addEventListener("change", formRequire);
emailPreference.addEventListener("change", formRequire);
formRequire();