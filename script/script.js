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

// totals
function total(namediv){
    
    var els = document.getElementById(namediv).getElementsByTagName("input");
    var totaldiv = 0;


    for (var i =0; i < els.length;i++)
    {
        if (namediv === "starters" || namediv === "main" ) 
        {   
          
           
            if ("Mushroom Brushchetta with Balsamic and Thyme" === els[i].getAttribute("name") || "Creamy Brocoli pasta" === els[i].getAttribute("name"))
            {
                

                vegvalue = parseFloat(els[i].getAttribute("data-price") * parseFloat(els[i].value));

            
    var ItemsTotal = document.getElementById("veg"+ namediv)
    ItemsTotal.innerHTML = "€" + vegvalue;
    // validate = 1;

    var ItemsTotal = document.getElementById("non-veg"+namediv)
    ItemsTotal.innerHTML = "€" + totaldiv;

            }
        }
        
        
        multiply = parseFloat(els[i].getAttribute("data-price") * parseFloat(els[i].value));
        totaldiv = totaldiv + multiply;
     
     
    }
    

    var ItemsTotal = document.getElementById("ItemsTotal"+ namediv)
    ItemsTotal.innerHTML = "€" + totaldiv;
}

 