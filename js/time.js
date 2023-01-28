function updateClock() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  document.getElementById('clock').innerHTML = currentHour + ':' + currentMinute + ':' + currentSeconds;
}
setInterval(updateClock, 1000);
