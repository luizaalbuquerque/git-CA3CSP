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
//customer

window.onload = CallJson;

        function CallJson(){
            fetch('https://randomuser.me/api/?results=6')
            .then((load) => load.json())
            .then((data) => {
                let datas = data.results;
                let output = '<h2>Customers</h2>'
            
                console.log(data);
                datas.forEach(function(costumer){
                    output += `
                    <div class="boxCustomer">
                        <ul>

                            <p><strong>Name: </strong>${costumer.name.first} ${costumer.name.last}</p>
                            <img src="${costumer.picture.thumbnail}">
                         <hr>
                            <p><strong>Phone: </strong>${costumer.phone}</p>
                            <hr>
                            <p><strong>DOB: </strong>${costumer.dob.date}</p>
                            <hr>
                            <p><strong>Age: </strong>${costumer.dob.age}</p>
                            <hr>
                           <p><strong>Email: </strong>${costumer.email}</p>
                           <hr>
                            <p><strong>Gender: </strong>${costumer.gender}</p>
                            <hr>
                            <p><strong>City: </strong>${costumer.location.city}</p>
                            <hr>
                          <p><strong>Country: </strong>${costumer.location.country}</p>
                          <hr>
                            <p><strong>PostCode: </strong>${costumer.location.postcode}</p>
                      
                        </ul>
                    </div>
                    `;
                });

                document.getElementById('CustumerGenerator').innerHTML = output;

            })
        }







// totals
function total(namediv){

    var veganItens = new Array("isso é evegano","Mushroom Brushchetta with Balsamic and Thyme","Creamy Brocoli pasta","Vegan Lemon Cheesecake")

    var els = document.getElementById(namediv).getElementsByTagName("input");
    var totaldiv = 0;
    var pricevegan = 0;
    var pricenovegan = 0;


    for (var i =0; i < els.length;i++)
    {
   
var veganorno = ((veganItens.indexOf(els[i].getAttribute("name"))) > -1);

        if (veganorno === true) 
        {   
          pricevegan =  pricevegan + (parseFloat(els[i].getAttribute("data-price") * parseFloat(els[i].value)));
        
            pricenovegan =totaldiv;


            
    var ItemsTotal = document.getElementById("veg"+ namediv)
    ItemsTotal.innerHTML = "€" + pricevegan;
    // validate = 1;

    var ItemsTotal = document.getElementById("non-veg"+namediv)
    ItemsTotal.innerHTML = "€" + pricenovegan;

            
        }
        
        
        multiply = parseFloat(els[i].getAttribute("data-price") * parseFloat(els[i].value));
        totaldiv = totaldiv + multiply;
     
     
    }
    

    var ItemsTotal = document.getElementById("ItemsTotal"+ namediv)
    ItemsTotal.innerHTML = "€" + totaldiv;
}

