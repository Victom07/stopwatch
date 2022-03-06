
var interval;
var min=0;
var sec=0;
var milisec=0;
var minHeading=document.getElementById("min")
var secHeading=document.getElementById("sec")
var milisecHeading=document.getElementById("milisec")

function timer(){
    milisec++
    milisecHeading.innerHTML=milisec  
    if(milisec >= 100){
        sec++
        secHeading.innerHTML=sec
        milisec=0;  
    }
    if(sec >= 60){
        min++
        minHeading.innerHTML=min  
        sec=0;  
    }
}
function start(){
    interval= setInterval(timer,10);
    document.getElementById("start").disabled = true;
}
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}
function reset(){
   min=00;
   sec=00;
   milisec=00;   
   minHeading.innerHTML=min
   secHeading.innerHTML=sec
   milisecHeading.innerHTML=milisec
   stop()
}
    
