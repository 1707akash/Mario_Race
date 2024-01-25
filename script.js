

let timerInMs= 0;

let timer;

document.querySelector(".start").addEventListener("click",startTimer);

document.querySelector(".stop").addEventListener("click",stopTimer);

document.querySelector(".reset").addEventListener("click",resetTimer);

function startTimer(){
    document.body.id = "running";
    timer = setInterval(()=>{
        timerInMs+=100;
        updateTimer(timerInMs);
    },100);
}

function resetTimer(){
    document.body.id = "still";
    clearInterval(timer);
    timerInMs=0;
    updateTimer(timerInMs);
}


function stopTimer(){
    document.body.id = "still";
    clearInterval(timer);
}


function updateTimer(timerInMs){
    let ms = Math.floor((timerInMs%1000)/10);
    let secs= Math.floor(timerInMs/1000);
    let min = Math.floor(timerInMs/60000);
    let hrs = Math.floor(timerInMs/3600000);

    document.querySelector(".ms").innerText = ms;
    document.querySelector(".secs").innerText =secs<10 ? "0"+ secs%60 : secs%60;
    document.querySelector(".min").innerText =min<10 ? "0"+ min%60 : min%60;
    document.querySelector(".hrs").innerText =hrs<10 ? "0"+ hrs%60 : hrs%60;

    
}

