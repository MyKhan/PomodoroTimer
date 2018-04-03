var timerMinutes = document.getElementById('timer-minutes').innerHTML;
var timerSeconds = document.getElementById('timer-seconds').innerHTML;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var timer;
stopButton.disabled = true;
resetButton.disabled = true;

function countdownTimerBegin(){
  timer = setInterval(function(){
    if (timerMinutes > 0 && timerSeconds == 0){
      timerMinutes -= 1;
      timerSeconds = 59;
    }
    else if (timerMinutes == 0 && timerSeconds == 0) {
      alert("Time's up!");
    }
    else
      timerSeconds -= 1;

    document.getElementById('timer-minutes').innerHTML = timerMinutes;
    document.getElementById('timer-seconds').innerHTML = timerSeconds;
  }, 1000);
  stopButton.disabled = false;
  resetButton.disabled = false;
  startButton.disabled = true;
}

function stopAndStart(){
  if(timer){
    clearInterval(timer);
    startButton.innerHTML = "Click Here To Continue";
    stopButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
  }
}


function stopAndReset(){
  clearInterval(timer);
  timerMinutes = 30;
  timerSeconds = 0;
  document.getElementById('timer-minutes').innerHTML = timerMinutes;
  document.getElementById('timer-seconds').innerHTML = timerSeconds;
  startButton.innerHTML = "Click Here To Begin!";
  resetButton.disabled = true;
  stopButton.disabled = true;
  startButton.disabled = false;
}

// function disableAndEnableButton(buttonId){
//   buttonId.disabled = !buttonId.disabled;
// }