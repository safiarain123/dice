var randomNumber1 = Math.floor (Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImagesource);

var randomNumber2 = Math.floor (Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImagesource2 = "images/" + randomDiceImage;
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player😎1 WINS!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player🥳2 WINS!";
} else {
    document.querySelector("h1").innerHTML = "🤠Draw!";
} 

