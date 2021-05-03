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

window.onload = CallJson;

function CallJson() {
    fetch('https://randomuser.me/api/?results=6')
        .then((load) => load.json())
        .then((data) => {
            let datas = data.results;
            let output = '<h2>Customers</h2>'

            console.log(data);
            datas.forEach(function (costumer) {
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


// totals generator
function total(namediv) {

    var vegItens = new Array("Mushroom Brushchetta with Balsamic and Thyme", "Creamy Brocoli pasta", "Vegan Lemon Cheesecake")

    var el = document.getElementById(namediv).getElementsByTagName("input");
    var totaldiv = 0;
    var priceveg = 0;
    var pricenoveg = 0;


    for (var i = 0; i < el.length; i++) {

        var vegorno = ((vegItens.indexOf(el[i].getAttribute("name"))) > -1);

        if (vegorno === true) {
            priceveg = priceveg + (parseFloat(el[i].getAttribute("data-price") * parseFloat(el[i].value)));

            pricenoveg = totaldiv;

            var ItemsTotal = document.getElementById("veg" + namediv)
            ItemsTotal.innerHTML = "€" + priceveg;


            var ItemsTotal = document.getElementById("non-veg" + namediv)
            ItemsTotal.innerHTML = "€" + pricenoveg;

        }

        multiply = parseFloat(el[i].getAttribute("data-price") * parseFloat(el[i].value));
        totaldiv = totaldiv + multiply;

    }

    var ItemsTotal = document.getElementById("ItemsTotal" + namediv)
    ItemsTotal.innerHTML = "€" + totaldiv;
}

