let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = Array.from(document.querySelectorAll('[data-time]'));

function timer(seconds) {
  // Clear timer
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const padSec = remainderSeconds < 10 ? '0' : ''
  const display = `${minutes}:${padSec}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const twelveHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const padMin = minutes < 10 ? '0' : ''

  endTime.textContent = `Be Back At ${twelveHour}:${padMin}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handleForm(e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', handleForm);
