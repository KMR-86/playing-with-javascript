change_color();
function change_color(){
    var frame=document.getElementById("colorframe");
    var r=getRandomArbitrary(0,256);
    var g=getRandomArbitrary(0,256);
    var b=getRandomArbitrary(0,256);
    var color="rgb("+r+","+g+","+b+")";
    frame.style.backgroundColor = color;
    console.log("function clicked");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}