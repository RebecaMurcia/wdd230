const baseURL = "https://rebecamurcia.github.io/wdd230/";
const  linksURL = "https://rebecamurcia.github.io/wdd230/data/links.json";

async function getLinks () {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();

const displayLinks = (weeks) => {
     ((week) => {
        //console.log(week);
        const listItem = document.createElement("li");
        const lessonWeek = document.createTextNode(`Lesson ${week.lesson}:`);

        listItem.appendChild(lessonWeek);

        week.links.forEach((link) => {
            //console.log(link);
             const rag = document.createElement("a");
             EventTarget.setAttribute("href", link.url);
             EventTarget.textContent = link.title;

             listItem.appendChild(tag);
            if (week.link.length > 1 && week.links.indexOf(link) < week.links.length - 1){
                listIten.innerHTML += " | ";
            }    
        });
        const list = document.querySelector(".lessons");
        list.appendChild(listItem);
    });
};


    