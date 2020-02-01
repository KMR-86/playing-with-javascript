var flag_of_ratation=0;

function rotate_card(){
    var j=document.getElementsByClassName("flip-card-inner")[0];
    console.log(j);
    if(flag_of_ratation%2==0){
        j.style.transform = "rotateY(180deg)";
    }
    else{
        j.style.transform = "rotateY(0deg)";
    }
    flag_of_ratation++;
    
}

