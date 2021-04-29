// password validator 

function validate() {
    // access the value inside the text box (id passwordValidator)
    var passwordValidator = document.getElementById("PasswordValidator").Pvalidator;
    // creating a regex object (literal)
    var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    alert(passwordValidator)

    // method used for matching the regex, will return valid or invalid
    if (regx.test(passwordValidator)) {
        alert('Valid password')
 

    }
    else {
        alert('Invalid password');
       
    }
}


    function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
}

