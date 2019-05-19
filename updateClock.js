moment.tz.setDefault("America/Sao_Paulo"); //set this as default due '.to' not working with '.tz' method

const BR = document.querySelector('.BR');
const IT = document.querySelector('.IT');
const dormeIT = document.querySelector('.dormeIT');
const dormeBR = document.querySelector('.dormeBR');
const dayTimeBR = document.querySelector('.day-time-br');
const dayTimeIT = document.querySelector('.day-time-it');
const talkTime = document.querySelector('.talk');
const meiaNoite = moment("00", "HH").format('HH');

let talkBR = Boolean;
let talkIT = Boolean;

function getDateBR() {
  const horarioBR = moment().subtract(1, 'hour').format('HH:mm:ss');
  const horaBR = moment().subtract(1, 'hour').format('HH');
  const dormirBR = moment().subtract(1, 'hour').to(moment("01:00:00", "HH:mm:ss").add(1, 'day')); //1h am

  BR.innerHTML = "BR CG " + horarioBR;

  if (horaBR > 06 && horaBR <= 18) {
    dayTimeBR.innerHTML = "There is sun";
  } else {
    dayTimeBR.innerHTML = "Sun is gone";
  }
  
  if (horaBR >= 01 && horaBR < 09) {
    dormeBR.innerHTML = "Sleeping";
    talkBR = false;
  } else if (horaBR >= 18) { //there is a bug when the moment's clock reachs 19:00. This seems to solve it
    dormeBR.innerHTML = "Sleep " + moment().subtract(1, 'hour').to(moment("01:00:00", "HH:mm:ss"));
    talkBR = true;
  } else {
    dormeBR.innerHTML = "Sleep " + dormirBR;
    talkBR = true;
  }  

  return talkBR;

}

function getDateIT() {
  const horarioIT = moment().add(5, 'hour').format('HH:mm:ss'); // add +5 for Rome timezone
  const horaIT = moment().add(5, 'hour').format('HH');
  const dormirIT = moment().add(5, 'hour').to(moment("03:00:00", "HH:mm:ss").add(1, 'day')); // calculate the amount of hours until the next time to sleep

  IT.innerHTML = "IT ROME " + horarioIT;

  if (horaIT > 06 && horaIT <= 19) {
    dayTimeIT.innerHTML = "There is sun";
  } else {
    dayTimeIT.innerHTML = "Sun is gone";
  }

  if (horaIT >= 03 && horaIT < 11) {
    dormeIT.innerHTML = "Sleeping";
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
  talkTime.innerHTML = "talk time";
} else {
  talkTime.innerHTML = "not a good time";
}