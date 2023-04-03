var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImages1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImages1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImages2);

var player;


if (randomNumber1 > randomNumber2) {
    // console.log(randomNumber1 +"num2 is :"+randomNumber2)
    player = "Player1 Win";
}
else if(randomNumber1==randomNumber2){
    player = "DRAW THE GAME";
} else {
    // console.log(randomNumber2 +"num1 is :"+randomNumber1)
    player = "Player2 Win";
}


document.querySelector("h1").textContent = player;