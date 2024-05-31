let timer: number | undefined;
let countdown: number | undefined;

const timerDisplay = document.getElementById("timer") as HTMLElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;
const stopBtn = document.getElementById("stop-btn") as HTMLButtonElement;

const startTime = 25 * 60;
timer = startTime;

function updateTimerDisplay(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
}

function startTimer() {
  if (countdown) return; // Prevent multiple intervals

  countdown = setInterval(() => {
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
