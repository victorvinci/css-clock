const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const second = document.querySelector('.second');

function setDate() {
  const now = new Date();

  // seconds
  const seconds = now.getSeconds();
  if (seconds <= 9) {
    second.innerHTML = "0" + seconds;
  }else{
    second.innerHTML = seconds;
  }

  //minutes
  const minutes = now.getMinutes();
  if (minutes <= 9) {
    min.innerHTML = "0" + minutes + ":";
  } else {
    min.innerHTML = minutes + ":";
  }
  //hours
  const hours = now.getHours();
  if (hours <= 9) {
    hour.innerHTML = "0" + hours + ":";
  } else {
    hour.innerHTML = hours + ":";
  }
}

setInterval(setDate, 1000);
// setDate();

console.log(moment().tz("America/Los_Angeles").format())