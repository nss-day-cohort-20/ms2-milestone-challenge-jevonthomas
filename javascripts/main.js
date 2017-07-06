console.log("First line in JS file", Date.now());

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
			`<div class="col-md-4">
					<div class="card" style="width: 20rem;">
					  <div class="card-block">
					    <h4 class="card-title">${cars.make}</h4>
					    <p class="card-text">${cars.description}</p>
					  </div>
					</div>
			  </div>`;
	})
}

console.log("Last line in JS file", Date.now());