let gameseq = [];
let userseq = [];

let highscore = 0;

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if (started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function (){
        btn.classList.remove("gameflash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerHTML = `Level ${level}  <br><br> <b>HIGHEST SCORE = ${highscore}<b> `;

    if(level > highscore){
        highestscore();
    }

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 
    gameseq.push(randColor)
    // console.log(gameseq);
    gameflash(randBtn);
}

function checkans(idx){
    if (userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else {
        // console.log("Highestscore = ", highscore);
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start. <br><br> <b>HIGHEST SCORE = ${highscore}<b>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress (){
    let btn = this;
    userflash(btn);

    
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function highestscore() {
    highscore++;
}