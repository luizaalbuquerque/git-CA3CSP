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
//customer generator

window.onload = CallJson; //calls the function as soon as the page is loaded

// function to generate random users 
function CallJson() {
    fetch('https://randomuser.me/api/?results=6') //generates 6 random customers using this API 
        .then((load) => load.json())
        .then((data) => {
            let datas = data.results;
            let output = '<h2>Customers</h2>' //title of the customers generator

            console.log(data);
            datas.forEach(function (costumer) {
                // gets the output of the following informations
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

            document.getElementById('CustomerGenerator').innerHTML = output; //sets the content 

        })
}

// totals generator

// function to generate the totals of the menu 
function total(namediv) {

    // gets all the vegetarian plates, making easy to modify the code if any veg options have to be add or removed 
    var vegItens = new Array("Mushroom Brushchetta with Balsamic and Thyme", "Creamy Brocoli pasta", "Vegan Lemon Cheesecake")

    // set the variables 
    var el = document.getElementById(namediv).getElementsByTagName("input");
    var totaldiv = 0;
    var priceveg = 0;
    var pricenoveg = 0;
   

// run through all input
    for (var i = 0; i < el.length; i++) {

        // compare if the name of the input is on the vegetarian list
        var vegorno = ((vegItens.indexOf(el[i].getAttribute("name"))) > -1);

        // if the answer is true (because I m using boolean >) does the vegetarian total 
        if (vegorno === true) {
            priceveg = priceveg + (parseFloat(el[i].getAttribute("data-price") * parseFloat(el[i].value))); //calculates the vegetarian total 


        }

        multiply = parseFloat(el[i].getAttribute("data-price") * parseFloat(el[i].value)); //this line multiplys the quantity by the price 
        totaldiv = totaldiv + multiply; //to give the final total, is needed to add all the numbers after the multiplication 

    }
   try{

// gives the vegetarian total 
    var ItemsTotal = document.getElementById("veg" + namediv)
            ItemsTotal.innerHTML = "€" + priceveg; 


            // gives the non vegetarian total 
            var ItemsTotal = document.getElementById("non-veg" + namediv)
            ItemsTotal.innerHTML = "€" + (parseInt(totaldiv - priceveg));

            
        }

// finally will execute the code regardless of the result of try 
   finally
   {

    // gives the total of the bill, including vegetarian and not vegetarian 
    var ItemsTotal = document.getElementById("ItemsTotal" + namediv)
    ItemsTotal.innerHTML = "€" + totaldiv;
}
}

