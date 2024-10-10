const countdownElement = document.getElementById("countdown");

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function startCountdown(duration) {
  let seconds = duration * 3600;

  const interval = setInterval(() => {
    seconds--;
    countdownElement.textContent = formatTime(seconds);

    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startCountdown(2);
});
