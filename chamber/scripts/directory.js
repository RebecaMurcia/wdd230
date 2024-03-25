// Directory list *****************************************
const baseURL = "https://rebecamurcia.github.io/wdd230/";
const dataURL = "../data/members.json";

const displayList = (members) => {
    const cards = document.querySelector(".listview");
     members.forEach((member) => {
        const bizCard = document.createElement("ul");
        // const listItem = document.createElement("li");

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
const listview = document.querySelector(".listview");
const cardview = document.querySelector(".cardview");

gridbutton.addEventListener("click", () => {
    listview.style.display = "none";
    cardview.style.display = "block";
});
listbutton.addEventListener("click",showList);

function showList(){
    cardview.style.display ="none";
    listview.style.display = "block";
}

const displayCards = (data) => { 
    let memCard = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", data.logo);
    image.setAttribute("alt", "Company Logo");
    let name = document.createElement("h3");
    name.textContent = `${data.name}`;
    let address = document.createElement("p");
    address.textContent = `${data.address}`;
    let phone = document.createElement("p");
    phone.textContent = `${data.phone}`;
    let website = document.createElement("a");
    website.setAttribute("href", data.website);
    website.textContent = `${data.website}`;

    memCard.appendChild(image);
    memCard.appendChild(name);
    memCard.appendChild(address);
    memCard.appendChild(phone);
    memCard.appendChild(website);

    document.querySelector(".cardview").appendChild(memCard);

    
} 

fetch(dataURL).then(function(response) {
    return response.json();
}).then(function(jsonObject) {

    const buzzList = jsonObject['members'];
 displayList(buzzList);
 buzzList.forEach(displayCards);
});