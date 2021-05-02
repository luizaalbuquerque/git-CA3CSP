// password validator 

function validate() {
    // access the value inside the text box (id passwordValidator)
    var passwordValidator = document.getElementById("PasswordValidator").value;
    // creating a regex object (literal)
    var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   

    // method used for matching the regex, will return valid or invalid
    if (regx.test(passwordValidator)) {
       var password = document.getElementById("valid");
       password.style.display = "block";
       var other = document.getElementById("inValid");
       other.style.display = "none";
 

    }
    else {
        var password = document.getElementById("inValid");
        password.style.display = "block";
        var other = document.getElementById("valid");
        other.style.display = "none";
    }
}

function total(nomedadiv){
    
    var els = document.getElementById(nomedadiv).getElementsByTagName("input");
    var totaldiv = 0;
 

    for (var i =0; i < els.length;i++)
    {
        multiplicacao = parseFloat(els[i].getAttribute("data-price") * parseFloat(els[i].value));
        totaldiv = totaldiv + multiplicacao;
     
    }
    var ItemsTotal = document.getElementById("ItemsTotal"+ nomedadiv)
    ItemsTotal.innerHTML = "€" + totaldiv;
}

 