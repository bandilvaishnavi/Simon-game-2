let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        LevelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
let score=0;
let highscore=0;
function LevelUp(){
    userSeq=[];

    level++;
    score=level;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(LevelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        updatescore(level);
        reset();
    }
}

function btnPress(){
 
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  
    started=0;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function updatescore(score){
    if(score>highscore){
        highscore=score;
        h3.innerHTML=`Your Highest Score : ${highscore} `;
        console.log(`highscore is ${highscore}`);
    }
}