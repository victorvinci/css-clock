function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsInDegrees = (seconds / 60) * 360;
}

setInterval(setDate, 1000);