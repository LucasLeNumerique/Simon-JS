let order = [];
let playerOrder = [];
let flash;
let round;
let good;
let ordiplay;
let intervalId;
let noise = true;
let on = false;
let win;

const touchCounter = document.querySelector("#touch-score");
const roundCounter = document.querySelector("#round-score");

const top_left = document.querySelector("#top-left");
const top_right = document.querySelector("#top-right");
const bottom_left = document.querySelector("#bottom-left");
const bottom_right = document.querySelector("#bottom-right");

const play_button = document.querySelector("#start");
const reset_button = document.querySelector("#reset");

document.getElementById("start").addEventListener("click", function() {

    on = true;
    play();
});
        
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    round = 1;
    document.getElementById("touch-score").innerHTML = "0";
    document.getElementById("round-score").innerHTML = "1";
    good = true;
    for (var i = 0; i < 8; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    ordiplay = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash == round) {
        clearInterval(intervalId);
        ordiplay = false;
        clearColor();
        on = true;
    }

    if (ordiplay) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        
        let audio = document.getElementById("_do");
        audio.play();
    }
    noise = true;
    top_left.style.backgroundColor = "#24A035"
}
function two() {
    if (noise) {
        
        let audio = document.getElementById("_re");
        audio.play();
    }
    noise = true;
    top_right.style.backgroundColor = "#0338CE"
}
function three() {
    if (noise) {
        
        let audio = document.getElementById("_mi");
        audio.play();
    }
    noise = true;
    bottom_right.style.backgroundColor = "#BE0202"
}
function four() {
    if (noise) {
        
        let audio = document.getElementById("_fa");
        audio.play();
    }
    noise = true;
    bottom_left.style.backgroundColor = "#CCCB00"
}

function clearColor() {

    top_left.style.backgroundColor = "rgb(1, 70, 9, 0.5)";
    top_right.style.backgroundColor = "rgb(18, 38, 109, 0.5)";
    bottom_left.style.backgroundColor = "rgb(99, 94, 5, 0.5)";
    bottom_right.style.backgroundColor = "rgb(88, 18, 18, 0.5)";
}

top_left.addEventListener('click', (event) => {

    if (on) {
        playerOrder.push(1);
        check();
        one();

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
top_right.addEventListener('click', (event) => {

    if (on) {
        playerOrder.push(1);
        check();
        two();

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
bottom_right.addEventListener('click', (event) => {

    if (on) {
        playerOrder.push(1);
        check();
        three();

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
bottom_left.addEventListener('click', (event) => {

    if (on) {
        playerOrder.push(1);
        check();
        four();

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

    if (good == false) {
        
        corrColor();
        roundCounter.innerHTML = "NOPE";
        setTimeout(() => {
            roundCounter.innerHTML = round;
            clearColor();

        }, 800);
        noise = false;
    }

    if (round == playerOrder.length && good && !win) {

        round++;
        playerOrder = [];
        ordiplay = true;
        flash = 0;
        roundCounter.innerHTML = round;
        intervalId = setInterval(gameTurn, 800);
    }
}
