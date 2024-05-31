var timer;
var countdown;
var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");
var stopBtn = document.getElementById("stop-btn");
var startTime = 25 * 60;
timer = startTime;
function updateTimerDisplay(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    timerDisplay.textContent = "".concat(minutes, ":").concat(remainingSeconds < 10 ? "0" : "").concat(remainingSeconds);
}
function startTimer() {
    if (countdown)
        return; // Prevent multiple intervals
    countdown = setInterval(function () {
        timer--;
        updateTimerDisplay(timer);
        if (timer <= 0) {
            clearInterval(countdown);
            countdown = undefined;
            timer = startTime;
            alert("Time's up!");
        }
    }, 1000);
}
function stopTimer() {
    if (countdown !== undefined) {
        clearInterval(countdown);
        countdown = undefined;
    }
}
function resetTimer() {
    clearInterval(countdown);
    countdown = undefined;
    timer = startTime;
    updateTimerDisplay(timer);
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

updateTimerDisplay(timer);