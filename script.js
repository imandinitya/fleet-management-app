let vehicles = [];

document.getElementById(addfleet).addEventListener("click", function(){
    let registration = document.getElementById("registration").value;
    let catagory = document.getElementById("type-v").value;
    let driver = document.getElementById("driverdetails").value;
    let availability = document.getElementById("availability-d").value;

    if(registration === "" || type-v === ""){
        alert("the required fields must be entered");
    }else{
        return;
    }

    let obj = {
        registration,
        catagory,
        driver,
        availability
    };

    vehicles.push(obj);
    displayCards(vehicles);

    document.getElementById("registration").value= "";
    document.getElementById("type-v").value="";
    document.getElementById("driverdetails").value="";
    document.getElementById("availability-d").value="";
});

function displayCards(data){
    let container = document.getElementById("CardsContainer");
    container.innerHTML="";

    data.forEach((Element,index)=>{
        let card = document.createElement("div");
        card.style.width = "45%";
        card.style.border = "1px solid black";
        card.style.padding = "15px";

        card.innerHTML = <p><b>reg no. ${Element.registration}</b></p>
        <p><b>type-v${Element.type-v}</b></p>
        <p><b>driver details : ${Element.driverdetails}</b></p>
        <p><b></b>availability: ${availability-d}</p>
        <button onclick="updateDriver(${index}">Update Driver</button>
        <buttononclick="updateavailability(${index}">Update availability></button>
        <button onclick="deletevehicle(${index}">Delete vehicle</button>

        container.appendChild(card);

    });

    function updateDriver(i){
        let newdriver = prompt ("enter new driver name :");

        if (newdriver == null || newdriver.trim()=== ""){
            alert("driver name is empty");
            return;
        }

        vehicles[i].driver = newdriver;
        displayCards(vehicles);
    }

    function changeavailability(i){
        vehicles[i].available = vehicles[i].available === "available"? "unavaible" : "available";

        displayCards(vehicles);
    }
}
document.getElementById("filter").addEventListener("change", applyfilters);
document.getElementById("availability"),addEventListener("change", applyfilters);

function applyfilters(){
    let cat = document.getElementById("filter").value;
    let avail
= document.getElementById("availability").value;
}
