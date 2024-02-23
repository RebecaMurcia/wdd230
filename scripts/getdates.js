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
