const baseURL = "https://rebecamurcia.github.io/wdd230/";
const dataURL = "price.json";

function buildTable(dataURL){
    var table = document.getElementById('myTable')

    for(var i = 0; i < dataURL.length; i++){
        var row = `<tr>
                      <td>${dataURL[i].type}</td>
                      <td>${dataURL[i].capacity}</td>
                      <td>${dataURL[i].halfrsv}</td>
                      <td>${dataURL[i].fullrsv}</td>
                      <td>${dataURL[i].halfwlkn}</td>
                      <td>${dataURL[i].fullwlkn}</td>
                   </tr> `
        table.innerHTML += row

    }
}
       

// fetch(dataURL).then(function(response) {
//     return response.json();
// }).then(function(jsonObject) {
//     // console.table(jsonObject)
//     const buzzList = jsonObject['members'];
//  buzzList.forEach(displayMembers);
//  console.log("JSON work");
// });
// console.log("test");