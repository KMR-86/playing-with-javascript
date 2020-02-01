var flag_of_rotation=0;
var meaning_no=0;
var word_no=1;

var map = []; 
addDataintoMap();
function addDataintoMap(){
    map.push({word:"palaver",meaning:"babble , talking for time passing"});
    map.push({word:"derisive",meaning:"making fun of someone or ridiculing someone"});
    map.push({word:"dilatory",meaning:"time wasting"});
    

}
function rotate_card(){
    var j=document.getElementsByClassName("flip-card-inner")[0];
    console.log(j);
    if(flag_of_rotation%2==0){
        j.style.transform = "rotateY(180deg)";
        var h1=document.getElementsByClassName("flip-card-back")[0].getElementsByTagName("h1")[0];
        h1.innerHTML=map[meaning_no%map.length].meaning;
        meaning_no++;
    }
    else{
        j.style.transform = "rotateY(0deg)";
        var h1=document.getElementsByClassName("flip-card-front")[0].getElementsByTagName("h1")[0];
        h1.innerHTML=map[word_no%map.length].word;
        word_no++;
    }

    flag_of_rotation++;

    
}

function readTextFile(){

    const fs = require('fs') 
  
    fs.readFile('input.txt', (err, data) => { 
        if (err) throw err; 
        console.log(data.toString()); }) 
}

