let time = document.getElementById("time")
let btnPlay   = document.getElementById("btnPlay")
let btnPause= document.getElementById("btnPause")
let btnRestart= document.getElementById("btnRestart")
let btnStop= document.getElementById("btnStop")

let isActive = false;
let currentTime ={
    decimals: 0,
    seconds: 0,
    minutes: 0
}

function format(number){
    if(number <10){
        return "0"+number
    }
    else{
        return number
    }
}

function update(){
    currentTime.decimals++;

    if(currentTime.decimals == 10){
        currentTime.decimals = 0;
        currentTime.seconds++;
    }

    if(currentTime.seconds == 60){
        currentTime.seconds = 0;
        currentTime.minutes++
    }

    time.innerHTML = `${format(currentTime.minutes)}:${format(currentTime.seconds)}:${currentTime.decimals}`
    if(isActive == true){
        setTimeout(update, 100)
    }
}

function play(){
    if(isActive == false){
        isActive = true;
        update();
    }
}

function pause(){
    isActive = false;
}

function restart(){
    if(isActive == false){
        isActive = true;
        update();
    }
    currentTime.decimals = 0;
    currentTime.seconds = 0;
    currentTime.minutes = 0;
}

function stop(){
    isActive = false;
    
    currentTime.decimals = 0;
    currentTime.seconds = 0;
    currentTime.minutes = 0;

    
}

btnPlay.addEventListener('click', play);
btnPause.addEventListener('click', pause);
btnRestart.addEventListener('click', restart);
btnStop.addEventListener('click', stop);