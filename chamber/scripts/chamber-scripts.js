//navigation bar
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
}
);
//Current year
document.getElementById("year").innerHTML = new Date().getFullYear();
//Last modified 
document.getElementById('lastModified').innerHTML = new Date(document.lastModified);
//dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});
// number of visits
const visitsDisplay =
document.querySelector('.number-visits');

let numVisits =
Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// Directory list
const baseURL = "https://rebecamurcia.github.io/wdd230/";
const dataURL = "https://rebecamurcia.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try{
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayMembers(data.members);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getMembers();

const displayMembers = (members) => {
    const cards = document.querySelector("#members");
     members.forEach((member) => {
        const bizCard = document.createElement("section");
        bizCard.setAttribute("class", "member");
        const companyName = document.createElement("h3");
        companyName.textContent = member.name;
        const address = document.createElement("p");
        address.textContent = member.address;
        const phone = document.createElement("p");
        phone.textContent = member.phone;
        const website = document.createElement("a");
        website.setAttribute("href", `https://${member.website}`);
        website.textContent = member.website;

        const logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.name.toLowerCase()}-logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "75");
        logo.setAttribute("height", "auto");

        bizCard.appendChild(logo);
        bizCard.appendChild(companyName);
        bizCard.appendChild(address);
        bizCard.appendChild(phone);
        bizCard.appendChild(website);

        cards.appendChild(bizCard);
     });
};
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click",showList);

function showList(){
    display.classList.add("list");
    display.classList.remove("grid");
}