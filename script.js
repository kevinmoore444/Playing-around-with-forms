var namespan = document.querySelector("#nameentry");
var foodtoorder = "Pizza"


function setname(element){
    namespan.innerText = element.value;
}

function pickfood(element){
    console.log("the food is " + element.value)
    foodtoorder = element.value
}

function order(){
    alert("Ordering a " + foodtoorder);
}