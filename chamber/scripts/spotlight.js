// business spotlight section************************
let businessSpotlights = document.querySelector(".businessSpotlights");


function displaySpotlight(data) {
    let iterations = spotLightmembers.length < 3 ? spotLightmembers : 3;
    while(iterations){
        let idx = ~~(Math.random() * spotLightmembers.lengh);
        createCard(spotLightmembers.splice(idx,1)[0]);

        iterations --;
    }
} 
// }data.filter(members => members.membership == "Silver" || members.membership == "Gold");

function createCard(member){
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("spotlight");

    
    let h2 = document.createElement("h2");
    h2.textContent = member.name;
    let a = document.createElement("a");
    a.setAttribute("href", member.website);
    a.setAttribute("target", "_blank");
    a.textContent = member.website;

    let p = document.createElement("p");
    p.innerHTML = member.phone;

    let img = document.createElement("img");
    img.setAttribute("src", member.logo);
    img.setAttribute("alt", member.name);
    
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(a);
    div.appendChild(p);
    document.querySelector(".spotlightCard").appendChild(div);

}

fetch("../data/members.json")
.then((response) => response.json())
.then((data) => {
    const list = data['members']
    for (let i = 1; i <= 3; i++){
        createCard(list [i]);
    }
    
});