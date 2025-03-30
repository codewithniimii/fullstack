let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");c

const randomNumber1 = Math.floor(Math.random() * 6) +1;
const randomNumber2 = Math.floor(Math.random() * 6) +1 ;

let diceImage1 = "images/dice" + randomNumber1 + ".png"; 
let diceImage2 = "images/dice" + randomNumber2 + ".png";

dice1.setAttribute("src", diceImage1);
dice2.setAttribute("src", diceImage2);