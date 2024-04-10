const baseURL = "https://rebecamurcia.github.io/wdd230/";
const dataURL = "../data/members.json";

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

fetch(dataURL).then(function(response) {
    return response.json();
}).then(function(jsonObject) {
    // console.table(jsonObject)
    const buzzList = jsonObject['members'];
 buzzList.forEach(displayMembers);
 console.log("JSON work");
});
console.log("test");