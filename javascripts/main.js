let cars = (function() {
	let privateCars = [];

	return {
		loadCars: function(callbackFunction) {
			//create a new request object
			let myRequest = new XMLHttpRequest();
			//setup event listeners for completed request and aborted request
			myRequest.addEventListener("load", function() {
				//set value of the private array
				privateCars = JSON.parse(this.responseText).cars;
				console.log("private cars array", privateCars);
				//callback to execute a function with the private array as the argument
				callbackFunction(privateCars);
			});
			//Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
			myRequest.open("GET", "inventory.json");
			//Get request
			myRequest.send();
		}
	}
})();