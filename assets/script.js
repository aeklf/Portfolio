// Contact Form

firstName.value
userEmail.value
company.value
phoneNumber.value
userMessage.value

var fields = {};

document.addEventListener("DOMContentLoaded", function(){
    fields.firstName = document.getElementById("firstName");
    fields.userEmail = document.getElementById("userEmail");
    fields.company = document.getElementById("company");
    fields.phoneNumber = document.getElementById("phoneNumber");
    fields.userMessage = document.getElementById("userMessage");
})

console.log(fields);

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isEmail(userEmail) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(userEmail).toLowerCase());
   }

function sendContact () {
    // Future Dev: Send email function
}

