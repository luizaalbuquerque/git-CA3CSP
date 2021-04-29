// password validator 

function validate() {
    // access the value inside the text box (id passwordValidator)
    var passwordValidator = document.getElementById("passwordValidator");
    // creating a regex object (literal)
    var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // method used for matching the regex, will return valid or invalid
    if (regx.test(passwordValidator)) {
        alert('Valid password')
        document.getElementById('Invalid').stylevisibility = "hidden";
        document.getElementById('Valid').style.visibility = "visible";

    }
    else {
        alert('Invalid password');
        document.getElementById('Valid').style.visibility = "hidden";
        document.getElementById('Invalid').style.visibility = "visible";
    }




    function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
}

