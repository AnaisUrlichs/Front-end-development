
let first = document.body.firstChild;
first.innerHTML = "First child";
first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";


// Change color of an element

let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed;



// Style and element

document.body.style.backgroundColor = "#201F2E";



// Create and insert elements

let newDestination = document.createElement("li");
newDestination.innerHTML = "Oaxaca, Mexico";
document.getElementById("more-destinations").appendChild(newDestination);



// remove an element

const parent = document.querySelector("#more-destinations");

const child = document.querySelector("#oaxaca");

parent.removeChild(child);
