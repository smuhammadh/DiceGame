var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

document.querySelectorAll("img")[0].setAttribute("src","Images/dice" +randomNumber1+ ".png");
document.querySelectorAll("img")[1].setAttribute("src","Images/dice" +randomNumber2+ ".png");


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Muhammad the Epic Wins! 🚩";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Hafsa the AbDikhaonGee Wins! 🚩";
}

else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "It's a draw 😐";
}
