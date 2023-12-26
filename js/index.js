// var anchorData = document.getElementsByTagName('a');
// var anchorDataLength = anchorData.length;
// for(let i = 0; i < anchorDataLength; i++){
//    if(anchorData[i].innerHTML.includes('Contributed by -')) {
//         anchorData[i].innerHTML = anchorData[i].innerHTML.replace('Contributed by -', 'Contributor</br>');
//     }
// }

const path="./count.json"
var heros = document.getElementById("hero")
var slugs = document.getElementById("slugs")
var eleslugs = document.getElementById("eleslugs")

window.onload=(event)=>{
    data={
        heros:heros.childElementCount,
        slugs:slugs.childElementCount,
        eleslugs:eleslugs.childElementCount,
    }
    localStorage.setItem("data",JSON.stringify(data))
}