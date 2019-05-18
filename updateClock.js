const BR = document.querySelector('.BR');
const IT = document.querySelector('.IT');
const dormeIT = document.querySelector('.dormeIT');
const dormeBR = document.querySelector('.dormeBR');

moment.tz.setDefault("America/Sao_Paulo"); //set this as default due '.to' not working with '.tz' method

let sunTimeBR = Boolean;
let sunTimeIT = Boolean;

function getDateBR() {
  const horarioBR = moment().format('HH:mm:ss');
  const horaBR = moment().format('HH');
  const dormirBR = moment().to(moment("01:00:00", "HH:mm:ss").add(1, 'day'));

  if (horaBR < 24 && horaBR > 06 && horaBR <= 19) {
    sunTimeBR = true;
  } else {
    sunTimeBR = false;
  }
  
  BR.innerHTML = "BR SP " + horarioBR;
  dormeBR.innerHTML = "Sleep " + dormirBR; 

  return sunTimeBR;
}

function getDateIT() {
  const horarioIT = moment().add(5, 'hour').format('HH:mm:ss'); // add +5 for Rome timezone
  const horaIT = moment().add(5, 'hour').format('HH');
  const dormirIT = moment().add(5, 'hour').to(moment("03:00:00", "HH:mm:ss").add(1, 'day')); // calculate the amount of hours until the next time to sleep
  const acordarIT = 11;

  if (horaIT < 24 && horaIT > 06 && horaIT <= 19) {
    sunTimeIT = true;
  } else {
    sunTimeIT = false;
  }

  IT.innerHTML = "IT ROME " + horarioIT;
  dormeIT.innerHTML = "Sleep " + dormirIT; 

  return sunTimeIT;
}

setInterval(getDateBR, 1000);
setInterval(getDateIT, 1000);

if (getDateBR() === true && getDateIT() === true){
  console.log("acorda");
} else {
  console.log("dorme");
}
