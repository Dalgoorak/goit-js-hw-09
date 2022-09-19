const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.body;

let timerId = null;
const INTERVAL_DELAY = 1000;

onBtnDisabled(false, true);
// startBtn.disabled = false;
// stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function updateBackgroundColor() {
  bodyRef.style.background = getRandomHexColor();
}

function onBtnDisabled(start, stop) {
  startBtn.disabled = start;
  stopBtn.disabled = stop;
}

startBtn.addEventListener('click', onBtnClickStart);

function onBtnClickStart() {
  timerId = setInterval(updateBackgroundColor, INTERVAL_DELAY);
  // startBtn.disabled = true;
  // stopBtn.disabled = false;
  onBtnDisabled(true, false);
}

stopBtn.addEventListener('click', onBtnClickStop);

function onBtnClickStop() {
  clearInterval(timerId);
  // startBtn.disabled = false;
  // stopBtn.disabled = true;
  onBtnDisabled(false, true);
}
