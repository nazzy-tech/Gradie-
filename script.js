// Email and Password Validation Function
function validation(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-] {2,4})?$/;
    if( email === "" || password === ""){
        alert("Please fill all fields!!!");
        return false;
    }
    else if (!(email).match(emailReg)){
        alert("Invalid Email!!!");
        return false;
    }
    else{
        return true;
    }
}

// Submit form with id function

function submit_by_id(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (validation()){ //Calling validation function
        document.getElementById("formInput").submit; //Form submission
        alert(" Email: " + email + " n Password : " + password + " n FormInput : " + document.getElementById("formInput").getAttribute("id") + "nn Form Submitted Successfully......");
    } 
}