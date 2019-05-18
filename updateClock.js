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
  const dormirBR = moment().subtract(1, 'hour').to(moment("01:00:00", "HH:mm:ss")); //1h am
  //const dormindoBR = 01;
  const acordaBR = moment("01:00:00", "HH:mm:ss").add(8, 'hour').format('HH');;

  BR.innerHTML = "BR CG " + horarioBR;

  if (horaBR > 06 && horaBR <= 18) {
    dayTimeBR.innerHTML = "There is sun";
  } else {
    dayTimeBR.innerHTML = "Sun is gone";
  }
  
  if (horaBR >= 01 && horaBR < acordaBR) {
    dormeBR.innerHTML = "Sleeping";
    talkBR = false;
  } else {
    dormeBR.innerHTML = "Sleep " + dormirBR;
    talkBR = true;
  }  

  return talkBR;

    // if (horaBR == meiaNoite || horaBR >= 11) {
    
    // } else {
    
    // }

}

function getDateIT() {
  const horarioIT = moment().add(5, 'hour').format('HH:mm:ss'); // add +5 for Rome timezone
  const horaIT = moment().add(5, 'hour').format('HH');
  const dormirIT = moment().add(5, 'hour').to(moment("03:00:00", "HH:mm:ss")); // calculate the amount of hours until the next time to sleep
  //const dormindoIT = moment("03:00:00", "HH:mm:ss").format('HH'); //3h am
  //const acordaIT = moment("03:00:00", "HH:mm:ss").add(8, 'hour').format('HH'); //11h am

  IT.innerHTML = "IT ROME " + horarioIT;

  if (horaIT > 06 && horaIT <= 19) {
    dayTimeIT.innerHTML = "There is sun";
  } else {
    dayTimeIT.innerHTML = "Sun is gone";
  }

  if (horaIT >= 03 && horaIT < 11) {
    dormeIT.innerHTML = "Sleeping";
    talkIT = false;
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

console.log((moment("01:00:00", "HH:mm:ss").from(moment().subtract(1, 'hour'))), (moment("03:00:00", "HH:mm:ss").from(moment().add(5, 'hour')))); // maybe a solution for the ss bug or using fromNow

// .add(1, 'day') removed from sleep timer
