var timerMinutes = document.getElementById("timer-minutes").innerHTML;
var timerSeconds = document.getElementById("timer-seconds").innerHTML;

var canvas = document.getElementById("canvas");
var pomodoroDiv = document.getElementById("div-pomodoro");
var rotateButton = document.getElementById("button_rotate");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var timer;
var stateToEstablish = false;
var timerMiliSeconds = timerMinutes * 60000 + timerSeconds * 1000;

stopButton.disabled = true;
resetButton.disabled = true;

function countdownTimerBegin() {
	if (!canvas.classList.contains("animate")) {
		canvas.classList.add("animate");
		pomodoroDiv.classList.add("animate", "reverse");
		stateToEstablish = true;
		beginRotations(stateToEstablish);
	} else {
		stateToEstablish = true;
		beginRotations(stateToEstablish);
	}
	stopButton.disabled = false;
	resetButton.disabled = false;
	startButton.disabled = true;

	timer = setInterval(function() {
		timerMiliSeconds--;
		if (timerMiliSeconds % 250 == 0) {
			if (timerMinutes > 0 && timerSeconds == 0) {
				timerMinutes -= 1;
				timerSeconds = 59;
			} else if (timerMinutes == 0 && timerSeconds == 0) {
				stateToEstablish = false;
				alert("Time's up!");
				beginRotations(stateToEstablish);
				timerMinutes = 30;
				timerSeconds = 0;
			} else {
				timerSeconds--;
			}
			document.getElementById("timer-minutes").innerHTML = timerMinutes;
			document.getElementById("timer-seconds").innerHTML = timerSeconds;
		}
	}, 1);
}

function stopAndStart() {
	if (timer) {
		stateToEstablish = false;
		beginRotations(stateToEstablish);
		clearInterval(timer);
		startButton.innerHTML = "Click Here To Continue";
		stopButton.disabled = true;
		startButton.disabled = false;
		resetButton.disabled = false;
	}
}

function stopAndReset() {
	stateToEstablish = false;
	beginRotations(stateToEstablish);
	clearInterval(timer);
	timerMinutes = 30;
	timerSeconds = 0;
	timerMiliSeconds = timerMinutes * 60000 + timerSeconds * 1000;
	document.getElementById("timer-minutes").innerHTML = timerMinutes;
	document.getElementById("timer-seconds").innerHTML = timerSeconds;
	startButton.innerHTML = "Click Here To Begin!";
	resetButton.disabled = true;
	stopButton.disabled = true;
	startButton.disabled = false;

	setTimeout("canvas.classList.remove('animate');", 10);
	setTimeout("pomodoroDiv.classList.remove('animate','reverse');", 10);
}

function beginRotations(state) {
	if (!state) {
		canvas.style.animationPlayState = "paused";
		pomodoroDiv.style.animationPlayState = "paused";
	} else {
		canvas.style.animationPlayState = "running";
		pomodoroDiv.style.animationPlayState = "running";
	}
}
