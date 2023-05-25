// function validate(){
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
// 
    // if(email == "" && password == ""){
        // alert("Login Successful!!!");
        // return false;
    // }
    // else{
        // alert("Login Failed!!!");
    // }
// }




// Submit a form with javascript
let formInput = document.getElementById("formInput");
formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    //handle submit

    let myEmail = document.getElementById("email");
    let myPassword = document.getElementById("password");

    if (myEmail.value == "" || myPassword.value == ""){
        alert("Ensure you input a value in this field!");
    }else{
        alert("This form has been successfully submitted!!!");
        console.log(`Your email address ${myEmail.value} and password ${myPassword.value} have been submitted successfully`);

        myEmail.value = "";
        myPassword = "";
    }
});





// 
// Email and Password Validation Function
// function validation(){
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    // let emailReg = /^([w-.]+@([w-]+.)+[w-] {2,4})?$/;
    // if( email == "" || password == ""){
        // alert("Please fill all fields!!!");
        // return false;
    // }
    // else if (!(email).match(emailReg)){
        // alert("Invalid Email!!!");
        // return false;
    // }
    // else{
        // return true;
    // }
// }
// 
// Submit form with id function

// function submit_by_id(){
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    // if (validation()){ //Calling validation function
        // document.getElementById("formInput").submit; //Form submission
        // alert(" Email: " + email + " n Password : " + password + " n FormInput : " + document.getElementById("formInput").getAttribute("id") + "nn Form Submitted Successfully......");
    // } 
// }