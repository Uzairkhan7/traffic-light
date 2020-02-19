// var redLight = document.getElementsByClassName('redLight')
// var yellowLight = document.getElementsByClassName('yellowLight');
// var greenLight = document.getElementsByClassName('greenLight');
var redLight = document.getElementById('start');

function stop(){
    redLight.style.backgroundColor = "red";
    // document.getElementById("readyBtn").disabled = true;
    document.getElementById("goBtn").disabled = true;

  

}

function getReady(){

    document.getElementById('ready').style.backgroundColor = "yellow";
    document.getElementById('start').style.backgroundColor = "grey";
    document.getElementById("goBtn").disabled = false;
    document.getElementById("startBtn").disabled = true;



}

function goNow(){
    document.getElementById('go').style.backgroundColor = "green";
    document.getElementById('ready').style.backgroundColor = "grey";

    document.getElementById("readyBtn").disabled = true;
    document.getElementById("stopBtn").disabled = true;

}
