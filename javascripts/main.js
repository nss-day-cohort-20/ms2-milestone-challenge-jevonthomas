//create a new request object
let myRequest = new XMLHttpRequest();
console.log("myRequest", myRequest);

function executeThisIfXHRFails() {
	console.log("An error occured while transferring the data")
};

function executeThisAfterFileIsLoaded() {
	console.log("event.target", event.target)
	var data = JSON.parse(event.target.responseText);
	console.log("data", data);
	outputCars(data.cars);
}

//setup event listeners for completed request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);


//Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "inventory.json");

//Get request
myRequest.send();


//DOM manipulation stuff
function outputCars(carsArr) {
	let carList = document.getElementById("container");
	let carContainer = document.getElementsByClassName("container-fluid");
	let carRow = document.getElementsByClassName("row");
	carsArr.forEach( function(cars) {
			carRow[0].innerHTML +=
			`<div class="col-md-4 card-deck">
					<div class="card" style="width: 20rem;">
					  <div class="card-block black-border">
					    <h4 class="card-title">${cars.make}</h4>
					    <p class="card-text">${cars.description}</p>
					  </div>
					</div>
			  </div>`;
	})
	let card = document.getElementsByClassName("col-md-4");
	let inputBar = document.getElementById("input-bar");
	let cardBorder = document.getElementsByClassName("black-border");
	for (let i = 0; i < card.length; i++) {
		card[i].addEventListener("click", function() {
			for (let j = 0; j < card.length; j++) {
				inputBar.value = "";
				inputBar.focus();
				cardBorder[j].classList.remove("selected");
			}
			cardBorder[i].classList.toggle("selected");
			let selectedCard = document.getElementsByClassName("selected");
			for (let j = 0; j < selectedCard.length; j++) {
				inputBar.addEventListener("keyup", function() {
					selectedCard[j].childNodes[3].innerHTML = inputBar.value;
				})
			}
		})
	}
	document.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	    inputBar.focus();
	    inputBar.value = "";
	  }
	})
}

