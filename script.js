//make circles
let rn;
let score = 0;
let getNumber=0;
let newHit=0;

function makeCircles(){
    let circle="";
    for (let i = 0; i < 96; i++) {
        rn = Math.floor(Math.random()*20);
        circle += `<div class="circle">${rn}</div>`;
    }
    document.querySelector(".bottom").innerHTML = circle;
}

// set time 
function setTime(){
    let interval = setInterval(time,1000);
    let minit = 61;
    function time(){
        if(minit>0){
            minit--;
            document.querySelector(".timer").innerHTML = minit;
        }
        else{
            clearInterval(interval);
            let bottom = document.querySelector(".bottom");
            bottom.innerHTML = "";
            bottom.innerHTML += `<h1 class="end">Game Over!!</h1>`;
            bottom.innerHTML += `<h4 class="endtext">Your Score is: ${score}</h4>`
        }
    }
}

// hit number
function hitNumber(){
    document.querySelector(".hit").innerHTML = rn;
}

//increase score
function getScore(){
      let selectt = document.querySelector(".bottom");
      selectt.addEventListener("click",function(detail){
      getNumber = Number(detail.target.innerHTML);
      if(getNumber == rn){
        score += 1;
        let setScore = document.querySelector(".score");
        setScore.innerHTML = score;
        makeCircles();
        hitNumber();
      }
    })
}

//Function Calling
makeCircles();
setTime();
hitNumber();
getScore();

