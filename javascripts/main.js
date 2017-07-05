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
	carsArr.forEach( function(cars) {
		console.log("car make", cars.make);
		carList.innerHTML += `<h2>${cars.make}</h2>`;
	});
}

console.log("Last line in JS file", Date.now());