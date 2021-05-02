// password validator 

function validate() {
    // access the value inside the text box (id passwordValidator)
    var passwordValidator = document.getElementById("PasswordValidator").value;
    // creating a regex object (literal)
    var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   

    // method used for matching the regex, will return valid or invalid
    if (regx.test(passwordValidator)) {
       var x = document.getElementById("valid");
       x.style.display = "block";
       var y = document.getElementById("inValid");
       y.style.display = "none";
 

    }
    else {
        var x = document.getElementById("inValid");
        x.style.display = "block";
        var y = document.getElementById("valid");
        y.style.display = "none";
    }
}




