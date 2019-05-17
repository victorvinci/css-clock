const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  // seconds
  const seconds = now.getSeconds();
  const secondsInDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  //minutes
  const minutes = now.getMinutes();
  const minutesInDegrees = ((minutes / 60) * 360 + 90);
  minHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  //hours
  const hours = now.getHours();
  const hoursInDegrees = ((hours / 60) * 360 - 90);
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(setDate, 1000);