// //DOM manipulation stuff

//create a card for each car in the array
function createCards(carsArray) {
	let carList = document.getElementById("container");
	let carContainer = document.getElementsByClassName("container-fluid");
	let carRow = document.getElementsByClassName("row");
	for (let i = 0; i < carsArray.length; i++) {
		carRow[0].innerHTML +=
		`<div class="col-md-4 card-deck">
				<div class="card" style="width: 20rem;">
				  <div class="card-block black-border">
				    <h4 class="card-title">${carsArray[i].make}</h4>
				    <p class="card-text">${carsArray[i].description}</p>
				  </div>
				</div>
		  </div>`;
	}
	//call this function to add event listeners to each card
	userActions();
};

//add event listeners to each card loaded to the DOM
function userActions() {
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

cars.loadCars(createCards);