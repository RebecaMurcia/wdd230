//Current year
document.getElementById("year").innerHTML = new Date().getFullYear();
//Last modified 
document.getElementById('lastModified').innerHTML = new Date(document.lastModified);

//navigation bar
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
}
);
//Number of visits (Local Storage)
const visitsDisplay =
document.querySelector('.visits');

let numVisits =
Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//form re-enter password results
// This should be refactored.
const p1 = document.querySelector("#pssw");
const p2 = document.querySelector("#rpssw");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}
//email validation
document.addEventListener("DOMContentLoaded", function () {
	// Function to handle form submission
	function handleSubmit(event) {
		// Prevent default form submission
		event.preventDefault();

		// Access form elements
		let formt = event.target;
		let formData = new FormData(formt);

		// Display form element values
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});
//page range section
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


