const baseURL = "https://rebecamurcia.github.io/wdd230/scoots/price.json";
const dataURL = "price.json";
       
 async function price(){
    try{
        const response = await fetch(dataURL);
        if (response.ok) {
            const data = await response.json();
            displayTable(data.price);
        } else{
            throw Error(await response.text()); 
        }
    } catch (error) {
        console.log(error);
    }
 }
 price();

 const displayTable = (price) =>{
    console.log(price);
    const priceTable = document.getElementById("myTable");

    price.forEach((type) => {
        const row = document.createElement("tr");
        row.innerHTML = `
             <td>${type.type}</td>
             <td>${type.capacity}</td>
             <td>$${type.halfrsv}</td>
             <td>$${type.fullrsv}</td>
             <td>$${type.halfwlkn}</td>
             <td>$${type.fullwlkn}</td>      
        
        `;
        priceTable.appendChild(row);
    });
 };








// function displayTable(price){
//     var table = document.getElementById('myTable')

//     for(var i = 0; i < dataURL.length; i++){
//         var row = `<tr>
//                       <td>${dataURL[i].type}</td>
//                       <td>${dataURL[i].capacity}</td>
//                       <td>${dataURL[i].halfrsv}</td>
//                       <td>${dataURL[i].fullrsv}</td>
//                       <td>${dataURL[i].halfwlkn}</td>
//                       <td>${dataURL[i].fullwlkn}</td>
//                    </tr> `
//         table.innerHTML += row
//     }
// }



 // fetch(dataURL).then(function(response) {
//     return response.json();
// }).then(function(jsonObject) {
//     console.table(jsonObject)
//     const buzzList = jsonObject['members'];
//  buzzList.forEach(displayMembers);
//  console.log("JSON work");
// });
// console.log("test");