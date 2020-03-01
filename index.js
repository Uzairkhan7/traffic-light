var program = document.getElementById("program");
var timeScr = document.getElementById("timeScr");
var redLight = document.getElementById("stop");
var img = document.getElementById("image");
var sec = 0;
var value = 0;

program.style.display = "none";

function manual() {
  document.getElementById("prompt_page").style.display = "none";
  program.style.display = "block";
  timeScr.style.display = "none";
}
function auto() {
  document.getElementById("prompt_page").style.display = "none";
  document.getElementById("btns").style.display = "none";
  timeScr.style.display = "block";
  program.style.display = "block";

  time = prompt("Enter time in Sec");
  time = parseInt(time);
  console.log("time: ", typeof time);
  setInterval(startTime, 1000);
}
function startTime() {
    console.log("jj");
  // let readyfunc = parseInt(time)

  timeScr.innerHTML = sec < 10 ? "0" + sec : sec;
  if (sec == time) {
    sec = 0;
    stop(true);
    

  

    // clearInterval(timer)
  }
  sec++;
  // value++
}

var autoBtn = document.getElementById(autoBtn);

var redLight = document.getElementById("start");

function stop(next) {
  document.getElementById("stop").classList.remove("offLight");
  document.getElementById("stop").className = "redLight";
  document.getElementById("ready").className = "offLight";
  document.getElementById("go").className = "offLight";

  img.src = "./assets/stop.png";

  if (next) {
      setTimeout(() => {
          getReady(true);
      }, 3000);
  }
}

function getReady(next) {
  document.getElementById("ready").classList.remove("offLight");
  document.getElementById("ready").className = "yellowLight";
  document.getElementById("stop").className = "offLight";
  document.getElementById("go").className = "offLight";

  img.src = "./assets/ready.png";
  if (next) {
    setTimeout(() => {
        goNow(true);
    }, 3000);
}
}

function goNow(next) {
  document.getElementById("go").classList.remove("offLight");
  document.getElementById("go").className = "greenLight";
  document.getElementById("stop").className = "offLight";
  document.getElementById("ready").className = "offLight";

  img.src = "./assets/go.png";

  if (next) {
    setTimeout(() => {
        stop(true);
    }, 3000);
}
}
