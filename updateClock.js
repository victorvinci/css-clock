moment.tz.setDefault("America/Sao_Paulo"); //set this as default due '.to' not working with '.tz' method

const bgBR = document.querySelector('.container-brasil');
const bgIT = document.querySelector('.container-italia');
const clockBR = document.querySelector('.br');
const clockIT = document.querySelector('.it');
const dormeIT = document.querySelector('.dorme-it');
const dormeBR = document.querySelector('.dorme-br');
const dayTimeBR = document.querySelector('.day-time-br');
const dayTimePicBR = document.querySelector('.day-time-pic-br');
const dayTimePicIT = document.querySelector('.day-time-pic-it');
const dayTimeIT = document.querySelector('.day-time-it');
const talkTime = document.querySelector('.talk');
const meiaNoite = moment("00", "HH").format('HH');

let talkBR = Boolean;
let talkIT = Boolean;

function getDateBR() {
  const horarioBR = moment().subtract(1, 'hour').format('HH:mm:ss');
  const horaBR = moment().subtract(1, 'hour').format('HH'); //this exists for conditionals
  const dormirBR = moment().subtract(1, 'hour').to(moment("01:00:00", "HH:mm:ss").add(1, 'day')); // calculate the amount of hours until the next time to sleep

  clockBR.innerHTML = horarioBR;

  if (horaBR > 06 && horaBR <= 18) {
    dayTimeBR.innerHTML = "There is sun";
    dayTimePicBR.innerHTML = "<img src='./img/sun.png'>";
  } else {
    dayTimeBR.innerHTML = "Sun is gone";
    dayTimePicBR.innerHTML = "<img src='./img/moon.png'>";
  }
  
  if (horaBR >= 01 && horaBR < 09) {
    dormeBR.innerHTML = "Sleeping";
    dormeBR.style.backgroundColor = 'salmon';
    bgBR.style.backgroundColor = 'slategray';
    talkBR = false;
  } else if (horaBR >= 18) { 
    dormeBR.innerHTML = "Sleep " + moment().subtract(1, 'hour').to(moment("01:00:00", "HH:mm:ss")); //there is a bug when the moment's clock reachs 19:00. This seems to fix it
    talkBR = true;
  } else {
    dormeBR.innerHTML = "Sleep " + dormirBR;
    talkBR = true;
  }  

  return talkBR;

}

function getDateIT() {
  const horarioIT = moment().add(5, 'hour').format('HH:mm:ss'); // add +5 for Rome timezone
  const horaIT = moment().add(5, 'hour').format('HH'); //this exists for conditionals
  const dormirIT = moment().add(5, 'hour').to(moment("03:00:00", "HH:mm:ss").add(1, 'day')); // calculate the amount of hours until the next time to sleep

  clockIT.innerHTML = horarioIT;

  if (horaIT > 06 && horaIT <= 19) {
    dayTimeIT.innerHTML = "There is sun";
    dayTimePicIT.innerHTML = "<img src='./img/sun.png'>";
  } else {
    dayTimeIT.innerHTML = "Sun is gone";
    dayTimePicIT.innerHTML = "<img src='./img/moon.png'>";
  }

  if (horaIT >= 03 && horaIT < 11) {
    dormeIT.innerHTML = "Sleeping";
    dormeIT.style.backgroundColor = 'salmon';
    bgIT.style.backgroundColor = 'slategray';
    talkIT = false;
  } else if (horaIT <= 02) {
    dormeIT.innerHTML = "Sleep " + moment().add(5, 'hour').to(moment("03:00:00", "HH:mm:ss")); //prevents odd bug when clock reachs 00:30 IT time
    talkIT = true; 
  } else {
    dormeIT.innerHTML = "Sleep " + dormirIT;
    talkIT = true; 
  }  

  return talkIT;
}

setInterval(getDateBR, 1000);
setInterval(getDateIT, 1000);

if (getDateBR() === true && getDateIT() === true){
  talkTime.innerHTML = "TALK TIME";
  talkTime.style.backgroundColor = "lightgreen";
} else {
  talkTime.innerHTML = "NOT A GOOD TIME";
  talkTime.style.backgroundColor = "salmon";
}