//navigation bar****************************************
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
}
);
//Current year******************************************
document.getElementById("year").innerHTML = new Date().getFullYear();

//Last modified****************************************** 
document.getElementById('lastModified').innerHTML = new Date(document.lastModified);

//dark mode***********************************************
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});



