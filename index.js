function dicegame(){
//First dice Randomizer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "https://github.com/horusq/dice-game/tree/dac137d65ae5cf11c3bd1ba774f2d1e1f78ed77a/Dicee%20Challenge%20-%20Starting%20Filesimages/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImg);
//second dice randomizer
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImg);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player One Wins";
}else if(randomNumber1 <randomNumber2) {
  document.querySelector("h1").innerHTML="Player Two Wins";
}else{
  document.querySelector("h1").innerHTML="It's A Tie";
}
}
