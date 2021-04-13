function validate(){
    var passwordValidator = document.getElementById("passwordValidator").nodeValue;
var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (regx.test(passwordValidator)){
    alert("Valid password")
    document.getElementById('Invalid').stylevisibility ="hidden";
    document.getElementById('Valid').style.visibility ="visible";

}
else{
    alert("Invalid password");
    document.getElementById('Valid').style.visibility = "hidden";
    document.getElementById('Invalid').style.visibility="visible";
}
}

