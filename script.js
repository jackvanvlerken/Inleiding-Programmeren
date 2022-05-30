console.log("Welcome to the slotmachine!");

// Variabelen voor lever spin en interactie daarin

var lever = document.querySelector("#lever");
var msgWin = document.querySelector("#message_win");
var msgLose = document.querySelector("#message_lose");
var audioWin = document.querySelector("#audioWin");
var audioLose = document.querySelector("#audioLose");

var item1 = document.querySelector("#item1");
var item2 = document.querySelector("#item2");
var item3 = document.querySelector("#item3");

// Variabelen voor betting system

var items = ["R", "O", "B"];

// Hier kwam ik niet uit (array die bestaat uit images) (Bron 1)

// var items = new Array();

// items[0] = new Image();
// items[0].src = './images/apple.png';

// items[1] = new Image();
// items[1].src = './images/banana.png';

// items[2] = new Image();
// items[2].src = './images/orange.png';

// Variablen voor gok systeem

var points = document.querySelector("#points");
var totalPoints = 1000;
points.textContent = totalPoints;

var input1 = document.querySelector("#punt100");
var input2 = document.querySelector("#punt200");
var input3 = document.querySelector("#punt300");

// Lever spin systeem (Bron 2)

function randomItem() {
    return items[Math.floor(Math.random() * items.length)];
}

function spin() {
    console.log(totalPoints);

    num1 = randomItem();
    num2 = randomItem();
    num3 = randomItem();

    item1.textContent = num1;
    item2.textContent = num2;
    item3.textContent = num3;

    // Als gebruiker wint (gelijke combinatie a.k.a. 3 dezelfde letters) of als gebruiker verliest (geen gelijke combinatie)
    
    if (num1 === num2 && num1 === num3) {
        showWinMessage();
        playAudioWin();
        win();
    } else {
        hideWinMessage();
        lose();
    }

    // Reset van radio buttons na een lever click -> terug naar radio button '100'

    if (input1.checked = true, input2.checked = true, input3.checked = true) {
        input1.checked = true;
    }

    outofPoints();
}

// Gok systeem (Bron: Robert)

function win() {
    var deRadioButton = document.querySelector('input:checked');
    console.log(Number(deRadioButton.value));

    // Als gebruiker wint, krijgt de gebruiker 2x de gegokte punten

    totalPoints = totalPoints + Number(deRadioButton.value) *2;
    points.textContent = totalPoints;
}

function lose() {
    var deRadioButton = document.querySelector('input:checked');
    console.log(Number(deRadioButton.value));

    // Als de gebruiker verliest, verliest de gebruiker de gegokte punten

    totalPoints = totalPoints - Number(deRadioButton.value);
    points.textContent = totalPoints;
}

// Win en lose messages & sounds

// Win (gelijke combinatie)

function playAudioWin() {
    audioWin.play();
}

function showWinMessage() {
    msgWin.style.display = "block";
}

// de hideWinMessage functie is ervoor om de win message weg te halen als de gebruiker rollt na een win

function hideWinMessage() {
    msgWin.style.display = "none";
}

// Lose (geen gelijke combinatie)

function playAudioLose() {
    audioLose.play();
}

function showLoseMessage() {
    msgLose.classList.toggle("showElement");
}

// Als de gebruiker te weinig punten heeft om te gokken (Bron 4)

function outofPoints() {
    if (totalPoints == 200) {
        input3.disabled = true;
    }

    if (totalPoints == 100) {
        input3.disabled = true;
        input2.disabled = true;
    }

    if (totalPoints == 0) {
        input3.disabled = true;
        input2.disabled = true;
        input1.disabled = true;
        input3.checked = false;
        input2.checked = false;
        input1.checked = false;
        lever.classList.toggle("noElement");
        showLoseMessage();
        playAudioLose();
        window.setInterval('refresh()', 5000);
    } 
}

// De refresh (deze zet ik in nadat de gebruiker 'gameover' is) (Bron 5)

function refresh() {
    window .location.reload();
}

// En de eventlistener

lever.addEventListener("click", spin);

// Bronnen

//  1 ) https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
//  2 ) https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
//  3 ) https://www.youtube.com/watch?v=sSF0bXFUFGM (voor de radio buttons)
//  4 ) https://www.geeksforgeeks.org/how-to-disable-radio-button-using-javascript/
//  5 ) https://www.codegrepper.com/code-examples/javascript/javascript+reload+page+after+10+seconds
