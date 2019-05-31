// Question 4: In a Javascript file, write a program which checks the following things:
// checks that the password is 12345678
// if the password is incorrect, send an alert message
// Your page should also include an <h1> tag. If the information 
// in the form is correct, have Javascript change the text 
// in the <h1>.HTML page. It should include inputs for a username, email, and 
// password. Also a submit button.

let element = document.getElementById("enter"); 
let txt = document.getElementById("text-form"); 

element.addEventListener("click", (event) => {
    let passWord = document.getElementById("pass");

    if (passWord.value != 12345678)
        alert("Pass is not 12345678"); 
    else {
                event.preventDefault (); 
        txt.innerHTML = "Login Successful!"; 
    }
}); 




