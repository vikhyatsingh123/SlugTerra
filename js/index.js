var anchorData = document.getElementsByTagName('a');
var anchorDataLength = anchorData.length;
for(let i = 0; i < anchorDataLength; i++){
   if(anchorData[i].innerHTML.includes('Contributed by -')) {
        anchorData[i].innerHTML = anchorData[i].innerHTML.replace('Contributed by -', 'Contributor</br>');
    }
}
