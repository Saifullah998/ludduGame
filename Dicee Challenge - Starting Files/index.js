var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImgDice= "dice" + randomNumber1 + ".png";

var randomImgSource = "images/"+ randomImgDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src"  ,randomImgSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImgDice= "dice" + randomNumber2 + ".png";

var randomImgSource = "images/"+ randomImgDice;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src"  ,randomImgSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is Winner";
   
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
else {
    document.querySelector("h1").innerHTML = "DRAW!!";
}


